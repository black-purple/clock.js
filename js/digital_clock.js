function clock() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    $('#timeValueHrs').text(h < 10 ? "0" + h : h);
    $('#timeValueMins').text(m < 10 ? "0" + m : m);
    $('#timeValueSecs').text(s < 10 ? "0" + s : s);
}

setInterval(clock, 1000);
