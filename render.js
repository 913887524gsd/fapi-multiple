function get_ws(index, total) {
    let step = Math.floor(100 / total)
    if (index + 1 < total)
        return step
    else
        return 100 - step * (total - 1)
}

function gen_span_link(text, func, need_margin_left=false) {
    let link = document.createElement("span");
    link.innerText = text;
    link.style.cursor = "pointer";
    link.style.textDecoration = "underline";
    if (need_margin_left)
        link.style.marginLeft = "4px";
    link.style.color = "blue";
    link.onclick = func;
    return link
}

function gen_line(objlist, width = []) {
    let objlen = objlist.length;
    let new_div = document.createElement("div");
    Object.assign(new_div.style, {
        display: "flex",
        width: "100%"
    });

    for (let i = 0; i < objlen; i++) {
        let item = objlist[i];
        let col_div = document.createElement("div");

        let _width = width.length === objlen ? width[i] : get_ws(i, objlen);
        col_div.style.width = _width + "%";

        if (i + 1 < objlen) {
            Object.assign(col_div.style, {
                wordBreak: "break-word",
                overflowWrap: "break-word"
            });
        }

        if (item instanceof Node) {
            col_div.appendChild(item)
        } else {
            col_div.textContent = item;
        }
        new_div.appendChild(col_div);
    }

    return new_div;
}

function gen_empty_line() {
    let empty_div = document.createElement("div");
    Object.assign(empty_div.style, {
        display: "flex",
        width: "100%",
        height: "20px"
    });
    return empty_div;
}

function gen_omit_view_message(func) {
    let warning = get_locale_text("txt_omit_view_warning")
    let expand = get_locale_text("txt_omit_view_expand")
    let new_div = document.createElement("div");
    new_div.style.display = "inline";

    let warningText = document.createTextNode(warning + " ");
    let expandLink = gen_span_link(expand, func, true);

    new_div.appendChild(warningText);
    new_div.appendChild(expandLink);
    return new_div
}

function stringify_number(num) {
    if (num > 0)
        return "+" + num
    else
        return String(num)
}

function gen_time_duration(ms) {
    const sec = Math.floor(ms / 1000) % 60;
    const min = Math.floor(ms / (1000 * 60)) % 60;
    const hr = Math.floor(ms / (1000 * 60 * 60)) % 24;
    const day = Math.floor(ms / (1000 * 60 * 60 * 24));

    const parts = [];
    let head = false;
    if (day > 0 || head) parts.push(`${day}d`), head = true;
    if (hr > 0 || head) parts.push(`${hr}h`), head = true;
    if (min > 0 || head) parts.push(`${min}m`), head = true;
    if (sec > 0 || head) parts.push(`${sec}s`), head = true;

    return parts.length > 0 ? parts.join(' ') : '0s';
}

function gen_oridinal_number(number) {
    if (number % 10 == 1 && number != 11)
        return String(number) + "st";
    else if (number % 10 == 2 && number != 12)
        return String(number) + "nd";
    else
        return String(number) + "th";
}

function format_float(num) {
    if (Math.abs(num) != 0 && (Math.abs(num) < 0.01 || Math.abs(num) >= 5e3)) {
        return num.toExponential(4);
    } else if (Math.abs(num) != 0) {
        return num.toFixed(4);
    } else {
        return "0";
    }
}

function format(str, ...args) {
    return str.replace(/{(\d+)}/g, (match, index) => args[index]);
}