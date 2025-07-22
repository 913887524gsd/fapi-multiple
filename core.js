// debug
var debug = false;

// index
const i_base_atk = 0;
const i_consecutive = 1;
const i_gp = 2;
const i_xp = 3;
const i_charge = 4;
const i_atk_bonus = 5;
const i_crit_atk = 6;
const i_ps_max = 7;
const i_level = 7;
const i_max = 8;

// global
var boss_tier = 0;
var buff_atk = 0, buff_gp = 0, buff_xp = 0;
var my_level = 0, my_gp = 0, my_xp = 0, my_crit_hits = 0, my_reserve_hits = 0, my_ps = [];
var op_level = 0, op_crit_hits = 0, op_reserve_hits = 0, op_ps = [];
var rank_scores = [];
// special
var filters = [];
var if_build_comparision = false;
var if_spend_close_to_ratio = false, spend_ratio = [];
// reverse
var target_dmgs = [];
var level_range = [0, 0];
var if_limit_dmg_cost = false, limit_dmg_cost = 0;
// shop
var shop_cost_cache = [];
var shop_cost_formulars = [];
// calculate states
var valid_enums = [];
var damage_upperbound = 0;
var gp_upperbound = 0;
var dummy_ps = [0, 0, 0, 0, 0, 0, 0];
var atk_mask = [];
var eco_mask = [];
var exp_mask = [];
var gp_mask = [];

function shop_cost(which, level) {
    if (level < shop_cost_cache[which].length) {
        return shop_cost_cache[which][level];
    } else {
        return shop_cost_formulars[which](level);
    }
}

function init_shop_formulars() {
    for (let i = 0; i < i_max; i++)
        shop_cost_formulars.push(null);
    shop_cost_formulars[i_base_atk] = (level) =>    {return Math.floor((5 + level) * (1 + 0.1 * level));};
    shop_cost_formulars[i_consecutive] = (level) => {return Math.floor((25 + 25 * level) * Math.pow(1.6, level));};
    shop_cost_formulars[i_gp] = (level) =>          {return Math.floor((5 + level) * (1 + 0.05 * level));};
    shop_cost_formulars[i_xp] = (level) =>          {return Math.floor((5 + level) * (1 + 0.05 * level));};
    shop_cost_formulars[i_charge] = (level) =>      {return Math.floor((10) * (Math.pow(1.9, level)));};
    shop_cost_formulars[i_atk_bonus] = (level) =>   {return Math.floor((20 + 25 * level) * Math.pow(1.4, level));};
    shop_cost_formulars[i_crit_atk] = (level) =>    {return Math.floor((25 + 25 * level) * Math.pow(2, level));};
    shop_cost_formulars[i_level] = (level) =>       {return Math.floor((10 + level * 5) * Math.pow(1.02, level));};
}

function init_cache() {
    for (let i = 0; i < i_max; i++)
        shop_cost_cache.push([]);
    for (let i = 0; i < i_max; i++)
        for (let j = 0; j < 500; j++) {
            let value = shop_cost(i, j);
            if (value > 1e7)
                break;
            shop_cost_cache[i].push(value);
        }
}

function init_mask() {
    for (let i of [atk_mask, eco_mask, exp_mask, gp_mask])
        for (let j = 0; j < i_ps_max; j++)
            i.push(false)
    atk_mask[i_base_atk] = true 
    atk_mask[i_consecutive] = true 
    atk_mask[i_charge] = true 
    atk_mask[i_atk_bonus] = true 
    atk_mask[i_crit_atk] = true
    eco_mask[i_xp] = exp_mask[i_xp] = true
    eco_mask[i_gp] = gp_mask[i_gp] = true 
}

function cal_cost(ps) {
    if (debug)
        console.log(ps);
    let result = 0;
    for (let i = 0; i < i_ps_max; i++) {
        for (let j = 0; j < ps[i]; j++) {
            result += shop_cost(i,j)
        }
    }
    return result;
}

function cal_exp(level, rest_xp) {
    let result = rest_xp;
    for (let i = 1; i < level; i++)
        result += shop_cost(i_level, i);
    return result;
}

function adjust_crit(ps, crit_hits) {
    return 16 - ps[i_crit_atk] - crit_hits;
}

function cal_crit(ps, lvl, crit_hits, reserve_hits) {
    if (ps[i_crit_atk] == 0)
        return crit_hits;
    let num = 8 + ps[i_charge] + Math.floor(lvl / 25) - reserve_hits;
    for (let i = 0; i < num; i++) {
        crit_hits++;
        if (crit_hits >= 16 - ps[i_crit_atk]) {
            crit_hits = 0;
        }
    }
    return crit_hits;
}

function cal_damage(ps, level, crit_hits, reserve_hits, debug) {
    let atk1 = 20 + ps[i_base_atk] * 3 + level;
    let num = 8 + ps[i_charge] + Math.floor(level / 25) - reserve_hits;
    let total = 0;
    let dmgs = [];
    for (let i = 0; i < num; i++) {
        let atk2 = (atk1 + i * (ps[i_consecutive] + 1)) * 
                    (1 + buff_atk) * 
                    (1 + level / 100) * 
                    Math.pow(1.05, ps[i_atk_bonus]);
        if (ps[i_crit_atk] > 0) {
            crit_hits++;
            if (crit_hits >= 16 - ps[i_crit_atk]) {
                atk2 *= 5;
                crit_hits = 0;
            }
        }
        let atk3 = Math.ceil(atk2);
        total += atk3;
        if (debug)
            dmgs.push(atk3);
    }
    if (debug) {
        console.log(ps);
        console.log(dmgs);
    }
    return total;
}

function cal_scale(damage) {
    let scales = [1.10, 1.08, 1.06, 1.05, 1.04, 1.03, 1.02, 1.00]
    for (i = 0; i < rank_scores.length; i++) {
        let rd = rank_scores[i]
        if (debug)
            console.log(damage, rd)
        if (damage >= rd) {
            return [scales[i], i]
        }
    }
    return [scales[7], 7]
}

function cal_reward(ps, damage) {

    let [rank_scale, rank] = cal_scale(damage)
    let xp = (10 + boss_tier) * (1 + 0.05 * ps[i_xp]) * Math.pow(1.05, boss_tier) * rank_scale
    xp = Math.ceil(xp * (1 + buff_xp))
    let gp = (10 + boss_tier) * (1 + 0.05 * ps[i_gp]) * Math.pow(1.05, boss_tier) * rank_scale
    gp = Math.ceil(gp * (1 + buff_gp))

    return [xp, gp, rank]
}

function cal_levelup(xp) {
    let level_up = 0
    let rest_xp = xp
    while (true) {
        let need_xp = shop_cost(i_level, my_level + level_up);
        if (need_xp > rest_xp)
            break
        rest_xp -= need_xp
        level_up++
    }
    return [level_up, rest_xp]
}

function cal_damage_cost(ps) {
    let _ps = JSON.parse(JSON.stringify(ps));
    for (let i = 0; i < i_ps_max; i++)
        if (!atk_mask[i])
                _ps[i] = 0;
    return cal_cost(_ps);
}

function cal_eco_cost(ps) {
    let _ps = JSON.parse(JSON.stringify(ps));
    for (let i = 0; i < i_ps_max; i++)
        if (!eco_mask[i])
                _ps[i] = 0;
    return cal_cost(_ps);
}

function cal_catching_up_cost(cur_ps, tar_ps, filter) {
    let cost = 0
    for (let i = 0; i < i_ps_max; i++) {
        if (!filter[i])
            continue
        for (let j = cur_ps[i]; j < tar_ps[i]; j++)
            cost += shop_cost(i, j)
        for (let j = tar_ps[i]; j < cur_ps[i]; j++)
            cost -= shop_cost(i, j)
    }
    return cost
}

function cal_damage_efficiency(ps, crit_hits, reserve_hits, penalty = 1) {
    let cost = cal_catching_up_cost(my_ps, ps, atk_mask);
    if (cost > 0)
        return (cal_damage(ps, my_level, crit_hits, reserve_hits, false) - 
                cal_damage(my_ps, my_level, crit_hits, reserve_hits, false)) / 
                Math.pow(cost, penalty);
    else
        return 0;
}

function enum_gp(ps, gp, index) {
    if (index >= i_ps_max) {
        let _ps = JSON.parse(JSON.stringify(ps))
        valid_enums.push([_ps, gp])
        return
    }
    if (!filters[index]) {
        enum_gp(ps, gp, index + 1);
        return
    }

    let ori_level = ps[index];
    enum_gp(ps, gp, index + 1);
    while (true) {
        let cost = shop_cost(index, ps[index])
        if (cost > gp)
            break
        ps[index]++
        gp -= cost
        enum_gp(ps, gp, index + 1)
    }
    ps[index] = ori_level
}

function enum_dmg(ps, lvl, gp, crit_hits, index, is_new) {
    let dmg = cal_damage(ps, lvl, crit_hits, 0, false);

    if (gp > gp_upperbound || gp < 0)
        return false;
    if (dmg > damage_upperbound)
        return false;
    if (is_new) {
        for (let _dmg of target_dmgs) {
            if (dmg == _dmg) {
                let _ps = JSON.parse(JSON.stringify(ps));
                valid_enums.push([_ps, gp, lvl, crit_hits]);
            }
        }
    }
    if (index >= i_ps_max)
        return true;
    if (!atk_mask[index])
        return enum_dmg(ps, lvl, gp, crit_hits, index + 1, is_new);
    if (!enum_dmg(ps, lvl, gp, crit_hits, index + 1, false))
        return true;
    let ori_level = ps[index];
    while (true) {
        let cost = shop_cost(index, ps[index])
        ps[index]++
        gp += cost
        if (!enum_dmg(ps, lvl, gp, crit_hits, index + 1, true))
            break
    }
    ps[index] = ori_level

    return true
}

function enum_atk_eff(ps) {
    let results = [];
    let upgrades = get_locale_text("txt_upgrades");

    for (let index = 0; index < i_ps_max; index++) {
        if (!atk_mask[index])
            continue;
        let _ps = JSON.parse(JSON.stringify(ps));
        _ps[index] += 1;
        let dmg_diff = cal_damage(_ps, my_level, my_crit_hits, my_reserve_hits, false) - 
                        cal_damage(ps, my_level, my_crit_hits, my_reserve_hits, false);
        let dmg_cost = shop_cost(index, ps[index]);
        let dmg_eff = dmg_diff / dmg_cost;
        results.push([upgrades[index], dmg_diff, dmg_cost, dmg_eff]);
    }

    return results;
}

function init_core() {
    init_shop_formulars();
    init_cache();
    init_mask();
}