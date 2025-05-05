const sw_mins = document.querySelector("#sw_mins");
const sw_secs = document.querySelector("#sw_secs");
const sw_msecs = document.querySelector("#sw_msecs");

const sw_start = document.querySelector("#sw_start");
const sw_stop = document.querySelector("#sw_stop");
const sw_lap = document.querySelector("#sw_lap");
const sw_reset = document.querySelector("#sw_reset");

const laps = document.querySelector('#laps');

let interval = null;
let msecs = 0;
let seconds = 0;
let minutes = 0;
sw_start.onclick = () => {
    sw_start.style.display = 'none';
    sw_stop.style.display = 'inline';
    sw_lap.style.display = 'inline';
    sw_reset.style.display = 'none';
    sw_lap.removeAttribute('disabled');
    interval = setInterval(startSw, 10);
}
clearInterval(interval);
sw_stop.onclick = () => {
    sw_start.style.display = 'inline';
    sw_stop.style.display = 'none';
    sw_lap.style.display = 'none';
    sw_reset.style.display = 'inline';
    sw_start.setAttribute('disabled', '');
    clearInterval(interval);
}
sw_reset.onclick = () => {
    sw_lap.style.display = 'inline';
    sw_lap.setAttribute('disabled', '');
    sw_reset.style.display = 'none';
    lap_index = 1;
    laps.replaceChildren();
    sw_start.removeAttribute('disabled');
    clearInterval(interval);
    sw_msecs.textContent = '00';
    sw_secs.textContent = '00';
    sw_mins.textContent = '00';
    clearInterval(interval);
    msecs = 0;
    seconds = 0;
    minutes = 0;
}

let lap_index = 1;
sw_lap.onclick = () => {
    const lap_div = document.createElement('div');
    const lap_index_span = document.createElement('span');
    const lap_time_span = document.createElement('span');

    lap_div.setAttribute('class', 'lap');
    lap_index_span.textContent = lap_index < 10 ? '0' + lap_index : lap_index;
    lap_time_span.textContent = `${sw_mins.textContent}:${sw_secs.textContent}:${sw_msecs.textContent}`;

    lap_div.appendChild(lap_index_span);
    lap_div.appendChild(lap_time_span);
    laps.appendChild(lap_div);
    lap_index++;
}
function startSw() {
    msecs++;
    console.log(msecs)
    if (msecs < 10) sw_msecs.textContent = '0' + msecs;
    if (msecs > 9) sw_msecs.textContent = msecs;
    if (msecs > 99) {
        seconds++;
        sw_secs.textContent = seconds < 10 ? '0' + seconds : seconds;
        msecs = 0;
        sw_msecs.textContent = '00';
    }
    if (seconds > 59) {
        minutes++;
        sw_mins.textContent = minutes < 10 ? '0' + minutes : minutes;
        seconds = 0;
    }
}


