const timer_setter = document.querySelector("#timer_setter");
const timer_start = document.querySelector("#timer_start");
const timer_reset = document.querySelector("#timer_reset");

const secs_text = document.querySelector("#secs");
const mins_text = document.querySelector("#mins");
const hrs_text = document.querySelector("#hours");

const hours_input = timer_setter.children[1];
const minutes_input = timer_setter.children[4];
const secs_input = timer_setter.children[7];

const deadlines = document.querySelectorAll('.deadline');

// Hours controller
timer_setter.children[0].onclick = () => {
    let value = parseInt(hours_input.value);
    value < 24 ? value++ : value;
    hours_input.value = value;
}
timer_setter.children[2].onclick = () => {
    let value = parseInt(hours_input.value);
    value > 0 ? value-- : value;
    hours_input.value = value;
}

// Minutes controller
timer_setter.children[3].onclick = () => {
    let value = parseInt(minutes_input.value);
    value < 60 ? value++ : value;
    if (value == 60) {
        value = 0;
        let hours = parseInt(hours_input.value);
        hours_input.value = hours + 1;
    }
    minutes_input.value = value;
}
minutes_input.onchange = () => {
    let value = parseInt(minutes_input.value);
    if (value == 60) {
        value = 0;
        let hours = parseInt(hours_input.value);
        hours_input.value = hours + 1;
    }
    minutes_input.value = value;
}
timer_setter.children[5].onclick = () => {
    let value = parseInt(minutes_input.value);
    value > 0 ? value-- : value;
    minutes_input.value = value;
}

// Seconds Controller
timer_setter.children[6].onclick = () => {
    let value = parseInt(secs_input.value);
    value < 60 ? value++ : value;
    if (value == 60) {
        value = 0;
        let minutes = parseInt(minutes_input.value);
        minutes_input.value = minutes + 1;
    }
    secs_input.value = value;
}
secs_input.onchange = () => {
    let value = parseInt(secs_input.value);
    if (value == 60) {
        value = 0;
        let minutes = parseInt(minutes_input.value);
        minutes_input.value = minutes + 1;
    }
    secs_input.value = value;
}
timer_setter.children[8].onclick = () => {
    let value = parseInt(secs_input.value);
    value > 0 ? value-- : value;
    secs_input.value = value;
}

// Reset
function resetContent(){
    hours_input.value = 0;
    minutes_input.value = 0;
    secs_input.value = 0;
    hrs_text.textContent = '00'; 
    mins_text.textContent = '00'; 
    secs_text.textContent = '00'; 
    secs = 0;
    mins = 0;
    hrs = 0;
    hrs_text.style.display = "inline";
    hrs_text.nextElementSibling.style.display = "inline";
    
    mins_text.style.display = "inline";
    mins_text.nextElementSibling.style.display = "inline";

    secs_text.style.display = "inline";
    secs_text.nextElementSibling.style.display = "inline";

    timer_start.removeAttribute('disabled');
    timer_setter.children[0].removeAttribute('disabled');
    timer_setter.children[2].removeAttribute('disabled');
    timer_setter.children[3].removeAttribute('disabled');
    timer_setter.children[5].removeAttribute('disabled');
    timer_setter.children[6].removeAttribute('disabled');
    timer_setter.children[8].removeAttribute('disabled');
    hours_input.removeAttribute('disabled');
    minutes_input.removeAttribute('disabled');
    secs_input.removeAttribute('disabled');
    
    deadlines[0].removeAttribute('disabled');
    deadlines[1].removeAttribute('disabled');
    deadlines[2].removeAttribute('disabled');
    deadlines[3].removeAttribute('disabled');
    deadlines[4].removeAttribute('disabled');
    deadlines[5].removeAttribute('disabled');
    deadlines[6].removeAttribute('disabled');
    deadlines[7].removeAttribute('disabled');
    deadlines[8].removeAttribute('disabled');
    clearInterval(timeinterval);
}

timer_reset.onclick = () => {
    resetContent();
}

function disableContent(){
    timer_start.setAttribute('disabled', '');
    hours_input.setAttribute('disabled', '');
    minutes_input.setAttribute('disabled', '');
    secs_input.setAttribute('disabled', '');
    timer_setter.children[0].setAttribute('disabled', '');
    timer_setter.children[2].setAttribute('disabled', '');
    timer_setter.children[3].setAttribute('disabled', '');
    timer_setter.children[5].setAttribute('disabled', '');
    timer_setter.children[6].setAttribute('disabled', '');
    timer_setter.children[8].setAttribute('disabled', '');
    deadlines[0].setAttribute('disabled', '');
    deadlines[1].setAttribute('disabled', '');
    deadlines[2].setAttribute('disabled', '');
    deadlines[3].setAttribute('disabled', '');
    deadlines[4].setAttribute('disabled', '');
    deadlines[5].setAttribute('disabled', '');
    deadlines[6].setAttribute('disabled', '');
    deadlines[7].setAttribute('disabled', '');
    deadlines[8].setAttribute('disabled', '');
}

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    
    return {
        total,
        hours,
        minutes,
        seconds
    };
}

let hrs = hours_input.value == 0 
    ? 1 
    : hours_input.value;
let mins = minutes_input.value == 0 
    ? 1 
    : minutes_input.value;
    let secs = secs_input.value == 0 
    ? 1 
    : secs_input.value;


let timeinterval = null;

const beep = document.querySelector("audio");
beep.volume = 0.5;
beep.loop = true;

const modal = document.querySelector('#modalBody');
const closeModal = document.querySelector('#closeModal');

closeModal.onclick = () => {
    closeModal.parentElement.style.display = "none";
    beep.pause();
    beep.currentTime = 0;
    resetContent();
}

function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const hours_div = clock.querySelector('.hours');
        const minutes_div = clock.querySelector('.minutes');
        const seconds_div = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);
        
        hours_div.textContent = ('0' + t.hours).slice(-2);
        minutes_div.textContent = ('0' + t.minutes).slice(-2);
        seconds_div.textContent = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            beep.play();
            clearInterval(timeinterval);
            modal.style.display = "flex";
        }
    }
    
    updateClock();
    timeinterval = setInterval(updateClock, 1000);
}



deadlines[0].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 60 * 120 * 1 * 1000); // 2h
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[1].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 60 * 60 * 1 * 1000); // 1h
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[2].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 45 * 60 * 1000); // 45min
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[3].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 30 * 60 * 1000); // 30min
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[4].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 15 * 60 * 1000); // 15min
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[5].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 10 * 60 * 1000); // 10min
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[6].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 5 * 60 * 1000); // 5min
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[7].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 1 * 60 * 1000); // 1min
    initializeClock('timer_text', deadline);
    disableContent();
}
deadlines[8].onclick = () => {
    let deadline = new Date(Date.parse(new Date()) + 1 * 1 * 30 * 1000); // 30sec
    initializeClock('timer_text', deadline);
    disableContent();
}

timer_start.onclick = () => {
    let deadline = new Date(
        Date.parse(new Date()) + (parseInt(hours_input.value) == 0 ? 1 : parseInt(hours_input.value) * 60) * (parseInt(minutes_input.value) == 0 ? 1 : parseInt(minutes_input.value) * 60) * (parseInt(secs_input.value) == 0 ? 1 : parseInt(secs_input.value)) * 1000);
    initializeClock('timer_text', deadline);
    disableContent();
}
