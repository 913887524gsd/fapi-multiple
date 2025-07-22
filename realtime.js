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

function gen_boss_info(ms) {
    if (ms < season_start) {
        return format(get_locale_text("txt_start_season"), gen_time_duration(season_start - ms));
    } else if (ms < season_end) {
        let boss_index = Math.floor((ms - season_start) / boss_round_duration) + 1;
        let running_time = (ms - season_start) % boss_round_duration;
        if (running_time < boss_running_duration) {
            return format(get_locale_text("txt_start_boss"), 
                    gen_oridinal_number(boss_index),
                    gen_time_duration(boss_running_duration - running_time));
        } else {
            return format(get_locale_text("txt_end_boss"),
                    gen_oridinal_number(boss_index),
                    gen_time_duration(boss_round_duration - running_time));
        }
    } else {
        return get_locale_text("txt_end_season");
    }
}

function boss_need_alert(ms) {
    if (season_start <= ms && ms < season_end) {
        let running_time = (ms - season_start) % boss_round_duration;
        if (boss_alert_duration <= running_time && running_time < boss_running_duration)
            return true;
    }
    return false;
}

function update_boss_info() {
    let ms = Date.now();
    let boss_info = document.getElementById('txt_boss_info');
    boss_info.innerText = gen_boss_info(ms);
    boss_info.style = boss_need_alert(ms) ? "color: red; font-weight: bold;" : "font-weight: bold;";
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
    [
        "my_base_atk",
        "my_consecutive",
        "my_gp_bonus",
        "my_xp_bonus",
        "my_atk_charge",
        "my_atk_bonus",
        "my_crit_atk",
    ],
    [
        "op_base_atk",
        "op_consecutive",
        "op_gp_bonus",
        "op_xp_bonus",
        "op_atk_charge",
        "op_atk_bonus",
        "op_crit_atk",
    ],
];

const compact_ids = [
    "my_compact_format",
    "op_compact_format",
];

function upgrades_flush_to_compact() {
    for (let i = 0; i < 2; i++) {
        let words = [];
        for (let j of upgrade_ids[i])
            words.push(document.getElementById(j).value);
        document.getElementById(compact_ids[i]).value = words.join(',');
    }
}

function compact_flush_to_upgrades() {
    for (let i = 0; i < 2; i++) {
        let values = document.getElementById(compact_ids[i]).value.match(/\d+/g).map(Number);
        let index = 0;
        for (let j of upgrade_ids[i])
            if (index >= values.length)
                break;
            else
                document.getElementById(j).value = String(values[index++]);
    }
}

function init_input_flush() {
    for (let i = 0; i < 2; i++) {
        for (let j of upgrade_ids[i])
            document.getElementById(j)
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