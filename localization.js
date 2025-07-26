const updatedate = "2025.7.25"

const text_area = [
    "txt_update_info", "txt_update_info_close",
    "txt_guideline", "txt_manual", "txt_updatelog",
    "txt_language", "txt_advance", "txt_console_debug",
    "txt_export", "txt_import",
    "txt_github_repo", "txt_github",
    "txt_global_attr", "txt_boss_tier",
    "txt_buff_formula1", "txt_buff_history", "txt_buff_formula2",
    "txt_buff_atk", "txt_buff_exp", "txt_buff_gp",
    "txt_rank_score1", "txt_rank_score2",
    "txt_player_attr",
    "txt_spend_close_to_ratio",
    "txt_build_comparision",
    "txt_attr", "txt_mine", "txt_oppo", "txt_headline_hint",
    "txt_level", "txt_xp", "txt_gp", "txt_crit_hits_left", "txt_reserve_hits",
    "txt_base_atk", "txt_consecutive", "txt_gp_bonus", "txt_xp_bonus", "txt_atk_charge", 
    "txt_atk_bonus", "txt_crit_hits", "txt_compact_format",
    "txt_reverse_damage_attr",
    "txt_reverse_damage1", "txt_reverse_damage2",
    "txt_level_range", "txt_limit_damage_cost",
    "txt_emulate_spend", "txt_show_cost", "txt_reverse_damage",
];

const result_text_area = [
    "txt_omit_view_warning",
    "txt_omit_view_expand",
    "txt_upgrades",
    "txt_gp2points",
    "txt_show_cost_build",
    "txt_show_cost_difference",
    "txt_show_cost_damage",
    "txt_show_cost_exp",
    "txt_show_cost_build_cost",
    "txt_show_cost_damage_cost",
    "txt_show_cost_eco_cost",
    "txt_show_cost_atk_efficiency1", 
    "txt_show_cost_atk_efficiency2",
    "txt_show_cost_future_cost1",
    "txt_show_cost_future_cost2",
    "txt_show_cost_continue",
    "txt_dmg2points",
]

const other_text_area = [
    "ref_manual", 
    "ref_updatelog", 
    "txt_info_checkboxes",
    "txt_start_season",
    "txt_end_season",
    "txt_start_boss",
    "txt_end_boss",
]

const zh_text = {
    "txt_update_info": "新版本已更新，检查更新日志获取最新改动",
    "txt_update_info_close": "好的",
    "txt_guideline": "可以用手机直接打开",
    "txt_manual": "说明书",
    "txt_updatelog": "更新日志(" + updatedate + ")",
    "txt_language": "English",
    "txt_advance": "",
    "txt_console_debug": "操纵台调试",
    "txt_export": "导出",
    "txt_import": "导入",
    "txt_github_repo": "github仓库",
    "txt_github": ",欢迎提issue和pr",
    "txt_global_attr": "全局属性",
    "txt_boss_tier": "BOSS等级",
    "txt_buff_formula1": "BUFF计算方式:金魂/10000",
    "txt_buff_formula2": "计算经验和金豆buff时会截断百位数后的部分（5950→5900/10000）",
    "txt_buff_history": "BUFF历史（由Tragon维护）",
    "txt_buff_atk": "BUFF攻击",
    "txt_buff_exp": "BUFF经验",
    "txt_buff_gp": "BUFF金豆",
    "txt_rank_score1": "排名伤害, 填写第1、3、10、50、250、1000、2500名的伤害",
    "txt_rank_score2": "排名2500的伤害只能猜,除非你有2500名的朋友(分隔符只要非数字就可以)",
    "txt_player_attr": "玩家属性",
    "txt_spend_close_to_ratio": "按照(攻击/经验/金豆)比率花费",
    "txt_build_comparision": "比较对手的加点(在模拟花费中比较差值,在查看消耗中比较加点花费)",
    "txt_attr": "属性",
    "txt_mine": "我的加点",
    "txt_oppo": "对手加点",
    "txt_headline_hint": "推荐取消勾选下面的一些勾选框以减少模拟时间",
    "txt_level": "英雄等级",
    "txt_xp": "经验值",
    "txt_gp": "金豆",
    "txt_crit_hits_left": "暴击剩余刀数",
    "txt_reserve_hits": "本轮留刀",
    "txt_base_atk": "基础攻击",
    "txt_consecutive": "连击",
    "txt_gp_bonus": "金豆加成",
    "txt_xp_bonus": "经验加成",
    "txt_atk_charge": "囤刀等级",
    "txt_atk_bonus": "攻击加成",
    "txt_crit_hits": "减少暴击所需刀数",
    "txt_compact_format": "紧凑表示",
    "txt_reverse_damage_attr": "伤害逆向属性",
    "txt_reverse_damage1": "逆向伤害可能的加点方式",
    "txt_reverse_damage2": "支持对多个伤害查找，伤害之间用非数字分隔符隔开",
    "txt_level_range": "遍历等级范围",
    "txt_limit_damage_cost": "限制伤害花费",
    "txt_emulate_spend": "模拟金豆花费",
    "txt_show_cost": "查看消耗",
    "txt_reverse_damage": "伤害逆向加点",
    //
    "txt_omit_view_warning": "搜索出来的结果太多了，仅保留前1000条",
    "txt_omit_view_expand": "显示所有",
    "txt_upgrades": {
        [i_base_atk]: "基础攻击",
        [i_atk_bonus]: "攻击加成",
        [i_crit_atk]: "暴击",
        [i_consecutive]: "连击",
        [i_gp]: "金豆",
        [i_xp]: "经验",
        [i_charge]: "囤刀",
        [i_level]: "等级",
    },
    "txt_gp2points": [["伤害", "性价比"], ["得金豆", "剩金豆"], "得经验", "暴击刀数", "排名", "加点"],
    "txt_show_cost_build": "加点",
    "txt_show_cost_difference": "差距",
    "txt_show_cost_damage": "伤害",
    "txt_show_cost_exp": "经验值",
    "txt_show_cost_build_cost": "加点花费",
    "txt_show_cost_damage_cost": "伤害花费",
    "txt_show_cost_eco_cost": "经济花费",
    "txt_show_cost_atk_efficiency1": ["点攻击性价比"], 
    "txt_show_cost_atk_efficiency2": ["攻击类型", "提升攻击", "攻击花费", "攻击性价比"],
    "txt_show_cost_future_cost1": ["未来升级需求"],
    "txt_show_cost_continue": "继续",
    "txt_dmg2points": ["伤害", "攻击/追赶花费", "暴击刀数", "等级", "加点"],
    //
    "ref_manual": "manuals/man-zh.html",
    "ref_updatelog": "log/updatelog-zh.html",
    "txt_info_checkboxes": "在模拟金豆花费中，如果某升级项没有被勾选，系统会在计算时忽略该升级项。<br>在查看消耗中，如果某项被勾选了，系统会计算该升级项未来的花费。",
    "txt_start_season": "第4赛季还未开启，赛季开启剩余时间: {0}",
    "txt_end_season": "第4赛季已经结束",
    "txt_start_boss": "运行",
    "txt_end_boss": "结束",
};

const en_text = {
    "txt_update_info": "updated, check update log to get new changes",
    "txt_update_info_close": "OK",
    "txt_guideline": "suitable for mobile",
    "txt_manual": "manual",
    "txt_updatelog": "update log(" + updatedate + ")",
    "txt_language": "简体中文",
    "txt_advance": "",
    "txt_console_debug": "console debug",
    "txt_github_repo": "github repo",
    "txt_github": ", welcome issues and prs",
    "txt_export": "export",
    "txt_import": "import",
    "txt_global_attr": "Global Attributes",
    "txt_boss_tier": "boss tier",
    "txt_buff_formula1": "buff formula: gold souls/10000",
    "txt_buff_formula2": "for exp and gp buff, gold souls should be truncated at the hundred's place (5950→5900/10000)",
    "txt_buff_history": "buff history (maintained by Tragon)",
    "txt_buff_atk": "buff atk",
    "txt_buff_exp": "buff exp",
    "txt_buff_gp": "buff gp",
    "txt_rank_score1": "enter damage values for ranks 1, 3, 10, 50, 250, 1000, and 2500, separated by non-digit characters",
    "txt_rank_score2": "you can only guess the damage made by rank 2500 player unless you have a friend",
    "txt_player_attr": "Player Attributes",
    "txt_spend_close_to_ratio": "spend gp as atk/exp/gp ratio",
    "txt_build_comparision": "builds comparison (system compares result differences in emulate spend, compares build costs in show cost)",
    "txt_attr": "attribute",
    "txt_mine": "your build",
    "txt_oppo": "opponent's build",
    "txt_headline_hint": "recommand to uncheck some checkboxes below to reduce search time",
    "txt_level": "hero level",
    "txt_xp": "hero exp",
    "txt_gp": "gold potato",
    "txt_crit_hits_left": "hits left to next crit",
    "txt_reserve_hits": "reserve hits current round",
    "txt_base_atk": "base attack",
    "txt_consecutive": "consecutive",
    "txt_gp_bonus": "gold potato bonus",
    "txt_xp_bonus": "hero exp bonus",
    "txt_atk_charge": "attack charge",
    "txt_atk_bonus": "attack bonus",
    "txt_crit_hits": "decrease hits to next crit",
    "txt_compact_format": "compact format",
    "txt_reverse_damage_attr": "Damage Reverse Attributes",
    "txt_reverse_damage1": "reverse input damage to  builds",
    "txt_reverse_damage2": "allow reversing multiple damages, separated by non-digit characters",
    "txt_level_range": "range of hero level",
    "txt_limit_damage_cost": "limit damage cost",
    "txt_emulate_spend": "emulate spend",
    "txt_show_cost": "show cost",
    "txt_reverse_damage": "reverse damages",
    //
    "txt_omit_view_warning": "there are too many results. keeping the first 1000 results",
    "txt_omit_view_expand": "expand all",
    "txt_upgrades": {
        [i_base_atk]: "atk+3",
        [i_atk_bonus]: "atk*1.05",
        [i_crit_atk]: "crit",
        [i_consecutive]: "cons",
        [i_gp]: "gp",
        [i_xp]: "exp",
        [i_charge]: "charge",
        [i_level]: "level",
    },
    "txt_gp2points": [["damage", "efficiency"], ["gain gp", "rest gp"], "gain xp", "hits to crit", "rank", "build"],
    "txt_show_cost_build": "build",
    "txt_show_cost_difference": "difference",
    "txt_show_cost_damage": "damage",
    "txt_show_cost_exp": "exp",
    "txt_show_cost_build_cost": "build cost",
    "txt_show_cost_damage_cost": "damage cost",
    "txt_show_cost_eco_cost": "eco cost",
    "txt_show_cost_atk_efficiency1": ["atk cost efficiency"],
    "txt_show_cost_atk_efficiency2": ["atk type", "atk bonus", "atk cost", "atk efficiency"],
    "txt_show_cost_future_cost1": ["future upgrade cost"],
    "txt_show_cost_continue": "continue",
    "txt_dmg2points": ["damage", "atk/catch up cost", "hits to crit", "level", "build"],
    //
    "ref_manual": "manuals/man-en.html",
    "ref_updatelog": "log/updatelog-en.html",
    "txt_info_checkboxes": "In `emulate spend`, if one upgrade is unchecked, the system will ignore this upgrade when computing.<br>In `show cost`, if one checkbox is checked, the system will calculate this one's future cost",
    "txt_start_season": "Season 4 has not started yet. Time remaining until start: {0}",
    "txt_end_season": "Season 4 has already ended.",
    "txt_start_boss": "Running",
    "txt_end_boss": "Dead",
};

var lang=""
var tippy0=null

function get_locale_text(key) {
    let text;
    if (lang == "zh") {
        text = zh_text[key]
    } else {
        text = en_text[key]
    }
    if (text == null) {
        console.log("error loading text " + key);
    }
    return text
}

function change_language(lang) {
    for (let k of text_area) {
        let _text = get_locale_text(k);
        let _obj = document.getElementById(k);
        if (_obj == null) {
            console.log("error getting obj " + k);
            continue
        }
        _obj.innerText = _text
    }
    document.getElementById('txt_manual').href = get_locale_text('ref_manual')
    document.getElementById('txt_updatelog').href = get_locale_text('ref_updatelog')
    if (tippy0 != null)
        tippy0[0].destroy()
    
    tippy0 = tippy('#info_checkboxes', {
        content: get_locale_text('txt_info_checkboxes'),
        allowHTML: true,
    });
}

function init_language() {
    lang = localStorage.getItem("lang") || navigator.language.split('-')[0];
    change_language(lang)
}

function toggle_language() {
    if (lang == "zh") {
        lang = "en"
    } else {
        lang = "zh"
    }
    change_language(lang)
    localStorage.setItem("lang", lang)
}

var advance = false;
var advance_ids = [
    "advance_json_load",
    "advance_player_attr_setting",
    "advance_txt_oppo",
    "advance_op_level",
    "advance_op_xp",
    "advance_op_gp",
    "advance_op_crit_hits",
    "advance_reserve_hits",
    "advance_op_base_atk",
    "advance_op_atk_bonus",
    "advance_op_crit_atk",
    "advance_op_consecutive",
    "advance_op_gp_bonus",
    "advance_op_xp_bonus",
    "advance_op_atk_charge",
    "advance_op_compact_format",
    "advance_reverse_damage",
    "advance_buttons",
];

function set_advance() {
    if (advance) {
        zh_text["txt_advance"] = "普通模式";
        en_text["txt_advance"] = "basic mode";
        document.getElementById("txt_advance").innerText = get_locale_text("txt_advance");
        for (let id of advance_ids)
            document.getElementById(id).style.display = "contents";
    } else {
        zh_text["txt_advance"] = "专家模式";
        en_text["txt_advance"] = "expert mode";
        document.getElementById("txt_advance").innerText = get_locale_text("txt_advance");
        for (let id of advance_ids)
            document.getElementById(id).style.display = "none";
    }
}

function init_advance() {
    let val = localStorage.getItem("advance");
    if (val == null)
        advance = false;
    else
        advance = val == "true";
    set_advance();
}

function toggle_advance() {
    advance = !advance;
    localStorage.setItem("advance", String(advance));
    set_advance();
}

const ids = [
    "boss_tier", "buff_atk", "buff_xp", "buff_gp", "rank_scores",
    "spend_ratio", "my_level", "op_level", "my_xp",
    "my_gp", "my_crit_hits", "op_crit_hits", "my_reserve_hits", "op_reserve_hits",
    "my_base_atk", "op_base_atk", "my_consecutive", "op_consecutive",
    "my_gp_bonus", "op_gp_bonus", "my_xp_bonus", "op_xp_bonus",
    "my_atk_charge", "op_atk_charge", "my_atk_bonus", "op_atk_bonus",
    "my_crit_atk", "op_crit_atk",  "level_range_low",
    "level_range_high", "limit_dmg_cost", "target_dmgs"
]

const checkboxes = [
    "console_debug",
    "if_spend_close_to_ratio",
    "if_build_comparision",
    "if_filt_level",
    "if_filt_base_atk",
    "if_filt_consecutive",
    "if_filt_gp_bonus",
    "if_filt_xp_bonus",
    "if_filt_atk_charge",
    "if_filt_atk_bonus",
    "if_filt_crit_atk",
    "if_limit_dmg_cost",
]

function load(get_value, userdata) {
    do {
        let k = 'console_debug'
        let r = get_value(k, userdata)
        debug = r == "true"
    } while (false)

    for(let k of ids){
        let r = get_value(k, userdata)
        if (debug)
            console.log('load', k, r)
        if (!r)
            continue
        document.getElementById(k).value = r
    }

    for (let k of checkboxes) {
        let r = get_value(k, userdata)
        if (debug)
            console.log('load', k, r)
        if (!r)
            continue
        let checked = r == "true"
        document.getElementById(k).checked = checked 
    }

    upgrades_flush_to_compact();
}

function save(put_value, userdata) {
    for(let k of ids){
        let r = document.getElementById(k).value
        if (debug)
            console.log('save', k, r)
        put_value(k, r, userdata)
    }

    for (let k of checkboxes) {
        let r = document.getElementById(k).checked
        if (debug)
            console.log('save', k, r)
        put_value(k, r, userdata)
    }
}

function local_get_value(k, dummy) {
    return localStorage.getItem(k)
}

function local_put_value(k, v, dummy) {
    localStorage.setItem(k, v)
}

function json_get_value(k, dic) {
    return dic[k]
}

function json_put_value(k, v, dic) {
    dic[k] = String(v)
}

function local_save() {
    save(local_put_value, null)
}

function local_load() {
    load(local_get_value, null)
}

function json_load() {
    let dic = {}
    try {
        dic = JSON.parse(document.getElementById('json_string').value)
    } catch (error) {
        return
    }
    load(json_get_value, dic)
    local_save()
}

function json_save() {
    let dic = {}
    save(json_put_value, dic)
    document.getElementById('json_string').value = JSON.stringify(dic)
}

function init_localization() {
    init_language();
    init_advance();
    local_load();
}