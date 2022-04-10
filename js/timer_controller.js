const timer_setter = document.querySelector("#timer_setter");
const timer_start = document.querySelector("#timer_start");
const timer_reset = document.querySelector("#timer_reset");

let hours_input = timer_setter.children[1];
let minutes_input = timer_setter.children[4];
let secs_input = timer_setter.children[7];

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

timer_reset.onclick = () => {
    hours_input.value = '00';
    minutes_input.value = '00';
    secs_input.value = '00';
}

function timer () {

    let timeleft = (parent(hours_input.value) * 3600) + (parseInt(minutes_input.value) * 60) + parseInt(secs_input.value);
        
    // Calculating the hours, minutes and seconds left
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.querySelector("#hours").textContent = hours; 
    document.querySelector("#mins").textContent = minutes; 
    document.querySelector("#secs").textContent = seconds; 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(timer_interval);
        document.querySelector("#hours").textContent = "";
        document.querySelector("#mins").textContent = "";
        document.querySelector("#secs").textContent = "";

        document.querySelector("#hours").style.display = "none";
        document.querySelector("#hours").nextElementSibling.style.display = "none";
        document.querySelector("#mins").style.display = "none";
        document.querySelector("#mins").nextElementSibling.style.display = "none";
        document.querySelector("#secs").style.display = "none";
        document.querySelector("#secs").nextElementSibling.style.display = "none";

        document.querySelector("#end").textContent = "TIME UP!!";
    }
}

let timer_interval = null;
timer_start.onclick = () => {
    timer_interval = setInterval(timer, 1000);
}

