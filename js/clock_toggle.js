const analog_clock = document.querySelector("#analog_clock");
const digital_clock = document.querySelector("#digital_clock");

analog_clock.addEventListener('click', clockToggle);
digital_clock.addEventListener('click', clockToggle);

function clockToggle(){
    if (analog_clock.style.display == 'none'){
        analog_clock.style.display = 'block';
        digital_clock.style.display = 'none';
    }else{
        analog_clock.style.display = 'none';
        digital_clock.style.display = 'block';
    }
}
