function truncate_list(list = [], length = 0, _default = 0) {
    while (list.length > length)
        list.pop()
    while (list.length < length)
        list.push(_default)
}

function read_value(id, map, _default, callback, userdata) {
    let obj = document.getElementById(id)
    if (obj == null) {
        if (debug)
            console.log("error finding" + id)
        return _default
    }
    let value = map(obj, userdata) || _default;
    if (callback)
        callback(obj, value)
    return value
}

function map_int(obj, userdata) {
    return Math.floor(Number(obj.value))
}

function map_float(obj, userdata) {
    return Number(obj.value)
}

function map_expr_int(obj, userdata) {
    try {
        return Math.floor(Number(
            Function("return " + obj.value)()
        ))
    } catch (error) {
        return null
    }
}

function map_list(obj, userdata) {
    let [len, _default] = userdata
    let value = (obj.value.match(/([0-9]+)/g) || []).map(Number)
    truncate_list(value, len, _default)
    return value
}

function map_ratio(obj, userdata) {
    let [len, _default] = userdata
    let value = (obj.value.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g) || []).map(Number);
    truncate_list(value, len, _default);
    let sum = 0;
    for (let i = 0; i < value.length; i++)
        sum += value[i];
    if (sum == 0)
        return [1, 0, 0];
    for (let i = 0; i < value.length; i++)
        value[i] /= sum;
    return value
}

function map_set(obj, userdata) {
    let value = (obj.value.match(/([0-9]+)/g) || []).map(Number)
    value = [...new Set(value)].sort((a, b) => a - b)
    return value
}

function map_checkbox(obj, userdata) {
    return Boolean(obj.checked)
}

function map_option(obj, userdata) {
    let [attr, target] = userdata
    return obj.getAttribute(attr) == target
}

function callback_normal(obj, value) {
    obj.value = String(value)
}

function callback_ratio(obj, value) {
    let _value = JSON.parse(JSON.stringify(value));
    for (let i = 0; i < _value.length; i++) {
        if (Math.floor(_value[i]) == _value[i])
            continue;
        _value[i] = _value[i].toFixed(2);
    }
    obj.value = String(_value);
}

function init_value(){
    debug = read_value('console_debug', map_checkbox, false, null, null);
    // boss
    boss_tier = read_value('boss_tier', map_int, 0, callback_normal, null);
    buff_atk = read_value('buff_atk', map_float, 0, callback_normal, null);
    buff_gp = read_value('buff_gp', map_float, 0, callback_normal, null);
    buff_xp = read_value('buff_xp', map_float, 0, callback_normal, null);
    rank_scores = read_value('rank_scores', map_list, [], callback_normal, [7, 0])
    // configure
    if_spend_close_to_ratio = read_value('if_spend_close_to_ratio', map_checkbox, false, null, null);
    spend_ratio = read_value('spend_ratio', map_ratio, [1, 0, 0], callback_ratio, [3, 0]);
    if_build_comparision = read_value('if_build_comparision', map_checkbox, false, null, null)
    // attributes
    my_level = read_value('my_level', map_int, 0, callback_normal, null);
    op_level = read_value('op_level', map_int, 0, callback_normal, null);
    my_xp = read_value('my_xp', map_int, 0, callback_normal, null);
    my_gp = read_value('my_gp', map_int, 0, callback_normal, null);
    my_crit_hits = read_value('my_crit_hits', map_int, 0, callback_normal, null);
    op_crit_hits = read_value('op_crit_hits', map_int, 0, callback_normal, null);
    my_reserve_hits = read_value('my_reserve_hits', map_int, 0, callback_normal, null);
    op_reserve_hits = read_value('op_reserve_hits', map_int, 0, callback_normal, null);
    my_ps = read_value('my_compact_format', map_list, [], callback_normal, [7, 0]);
    op_ps = read_value('op_compact_format', map_list, [], callback_normal, [7, 0]);
    my_crit_hits = adjust_crit(my_ps, my_crit_hits);
    op_crit_hits = adjust_crit(op_ps, op_crit_hits);
    compact_flush_to_upgrades();
    // filters
    filters[i_level] = read_value('if_filt_level', map_checkbox, false, null, null);
    filters[i_base_atk] = read_value('if_filt_base_atk', map_checkbox, false, null, null);
    filters[i_charge] = read_value('if_filt_atk_charge', map_checkbox, false, null, null);
    filters[i_atk_bonus] = read_value('if_filt_atk_bonus', map_checkbox, false, null, null);
    filters[i_consecutive] = read_value('if_filt_consecutive', map_checkbox, false, null, null);
    filters[i_gp] = read_value('if_filt_gp_bonus', map_checkbox, false, null, null);
    filters[i_xp] = read_value('if_filt_xp_bonus', map_checkbox, false, null, null);
    filters[i_crit_atk] = read_value('if_filt_crit_atk', map_checkbox, false, null, null);
    // reverse damage
    level_range[0] = read_value('level_range_low', map_int, 0, callback_normal, null);
    level_range[1] = read_value('level_range_high', map_int, 0, callback_normal, null);
    if (level_range[1] < level_range[0]) {
        level_range[1] = level_range[0];
        document.getElementById('level_range_high').value = String(level_range[1]);
    }
    if_limit_dmg_cost = read_value('if_limit_dmg_cost', map_checkbox, false, null, null);
    limit_dmg_cost = read_value('limit_dmg_cost', map_int, 0, callback_normal, null, null);
    target_dmgs = read_value('target_dmgs', map_set, [], callback_normal, null);

    local_save()
}