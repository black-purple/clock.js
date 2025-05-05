function clock() {
    const time_values = document.querySelectorAll('.time_value');

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    time_values[0].textContent = h;
    time_values[1].textContent = m;
    time_values[2].textContent = s;
}

setInterval(clock, 1000);
