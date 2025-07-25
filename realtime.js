const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
function apply_style() {
    for (let i = 0; i < 2; i++) {
        let name = "special-container" + i;
        let container = document.getElementById(name);
        if (isMobile) {
            container.style.display = "block";
        } else {
            container.style.display = "flex";
            container.style.gap = "5px";
        }
    }
}

function init_apply_style() {
    apply_style();
    window.addEventListener("resize", apply_style);
}

function close_update() {
    localStorage.setItem('updatedate', updatedate);
    document.getElementById('update_info').style.display = "none";
}

function check_update() {
    if (localStorage.getItem('updatedate') != updatedate) {
        document.getElementById('update_info').style.display = "block";
    }
}

var season_start = 0, season_end = 0;
var boss_alert_duration = 0;
var boss_running_duration = 0;
var boss_round_duration = 0;
var running_color = "#50C864";
var alert_color = "red";

function update_boss_info() {
    let ms = Date.now();
    let boss_info = document.getElementById('txt_boss_info');
    boss_info.innerHTML = "";
    boss_info.style.textAlign = "center";
    boss_info.style.width = "100%";
    boss_info.style.fontWeight = "bold";
    boss_info.style.fontSize = "26px";
    
    if (ms < season_start) {
        let new_div = null;
        new_div = document.createElement("div");
        new_div.textContent = format(get_locale_text("txt_start_season"), gen_time_duration(season_start - ms));
        boss_info.appendChild(new_div);
    } else if (ms < season_end) {
        let boss_index = Math.floor((ms - season_start) / boss_round_duration) + 1;
        let running_time = (ms - season_start) % boss_round_duration;
        let boss_index_div = document.createElement("div");
        boss_index_div.textContent = format("Boss: {0}/120", boss_index);
        boss_info.appendChild(boss_index_div);
        let boss_time_div = document.createElement("div");
        let statu_div = document.createElement("div");
        statu_div.style.display = "inline";
        let time_div = document.createElement("div");
        time_div.style.display = "inline";
        if (running_time < boss_running_duration) {
            statu_div.textContent = get_locale_text("txt_start_boss") + ": ";
            time_div.textContent = gen_time_duration(boss_running_duration - running_time);
            if (running_time < boss_alert_duration)
                boss_time_div.style.color = running_color;
            else
                boss_time_div.style.color = alert_color;
        } else {
            statu_div.textContent = get_locale_text("txt_end_boss") + ": ";
            time_div.textContent = gen_time_duration(boss_round_duration - running_time);
        }
        boss_time_div.appendChild(statu_div);
        boss_time_div.appendChild(time_div);
        boss_info.appendChild(boss_time_div);
    } else {
        let new_div = null;
        new_div = document.createElement("div");
        new_div.textContent = get_locale_text("txt_end_season");
        boss_info.appendChild(new_div);
    }
}

function init_boss_info() {
    season_start = Date.UTC(2025, 6, 24, 16, 0, 0, 0);
    boss_alert_duration = 15 * 60 * 60 * 1000;
    boss_running_duration = 17 * 60 * 60 * 1000;
    boss_round_duration = 18 * 60 * 60 * 1000;
    season_end = season_start + boss_round_duration * 120;
    update_boss_info();
    setInterval(update_boss_info, 1000);
}

const upgrade_ids = [
    {
        [i_base_atk]: "my_base_atk",
        [i_atk_bonus]: "my_atk_bonus",
        [i_crit_atk]: "my_crit_atk",
        [i_consecutive]: "my_consecutive",
        [i_gp]: "my_gp_bonus",
        [i_xp]: "my_xp_bonus",
        [i_charge]: "my_atk_charge",
    },
    {
        [i_base_atk]: "op_base_atk",
        [i_atk_bonus]: "op_atk_bonus",
        [i_crit_atk]: "op_crit_atk",
        [i_consecutive]: "op_consecutive",
        [i_gp]: "op_gp_bonus",
        [i_xp]: "op_xp_bonus",
        [i_charge]: "op_atk_charge",
    },
];

const compact_ids = [
    "my_compact_format",
    "op_compact_format",
];

function upgrades_flush_to_compact() {
    for (let i = 0; i < 2; i++) {
        let words = [];
        for (let j = 0; j < i_ps_max; j++)
            words.push(document.getElementById(upgrade_ids[i][j]).value);
        document.getElementById(compact_ids[i]).value = words.join(',');
    }
}

function compact_flush_to_upgrades() {
    for (let i = 0; i < 2; i++) {
        let values = (document.getElementById(compact_ids[i]).value.match(/\d+/g) || []).map(Number);
        for (let j = 0; j < i_ps_max; j++)
            if (j < values.length)
                document.getElementById(upgrade_ids[i][j]).value = String(values[j]);
            else
                document.getElementById(upgrade_ids[i][j]).value = "";
    }
}

function init_input_flush() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < i_ps_max; j++)
            document.getElementById(upgrade_ids[i][j])
                    .addEventListener('input', upgrades_flush_to_compact);
        document.getElementById(compact_ids[i])
                .addEventListener('input', compact_flush_to_upgrades);
    }
    upgrades_flush_to_compact();
}

function init_realtime() {
    init_apply_style();
    check_update();
    init_boss_info();
    init_input_flush();
}