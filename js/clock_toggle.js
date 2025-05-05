const analog_clock = document.querySelector("#analog_clock");
const digital_clock = document.querySelector("#digital_clock");

analog_clock.onclick = () => {
    if (digital_clock.style.display == 'none' || !digital_clock.style.display) {
        digital_clock.style.display = 'block';
        analog_clock.style.display = 'none';
    }
}
digital_clock.onclick = () => {
    if (analog_clock.style.display == 'none' || !analog_clock.style.display) {
        analog_clock.style.display = 'block';
        digital_clock.style.display = 'none';
    }
}
