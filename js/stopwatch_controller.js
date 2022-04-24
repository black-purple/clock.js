let interval = null;
let msecs = 0;
let seconds = 0;
let minutes = 0;
$('#sw_start').click(() => {
	$('#sw_start').hide();
	$('#sw_stop').show();
	$('#sw_reset').hide();
	$('#sw_lap').show();
	$('#sw_lap').removeAttr('disabled');
    interval = setInterval(startSw, 10);
});
$('#sw_stop').click(() => {
    $('#sw_start').show();
    $('#sw_stop').hide();
    $('#sw_lap').hide();
	$('#sw_reset').show();
    $('#sw_start').attr('disabled', '');
    clearInterval(interval);
});
$('#sw_reset').click(() => {
    $('#sw_lap').show();
	$('#sw_lap').attr('disabled', '');
    $('#sw_reset').hide();
    lap_index = 1;
    $('#laps').empty();;
	$('#sw_start').removeAttr('disabled');
	$('#sw_msecs').text('00');
	$('#sw_secs').text('00');
	$('#sw_mins').text('00');
    clearInterval(interval);
    msecs = 0;
    seconds = 0;
    minutes = 0;
});

let lap_index = 1;
$('#sw_lap').click(() => {
    const lap_div = document.createElement('div');
    const lap_index_span = document.createElement('span');
    const lap_time_span = document.createElement('span');

    lap_div.setAttribute('class', 'lap');
    lap_index_span.textContent = lap_index < 10 ? '0' + lap_index : lap_index;
    lap_time_span.textContent = `${$('#sw_mins').text()}:${$('#sw_secs').text()}:${$('#sw_msecs').text()}`;
    
    lap_div.appendChild(lap_index_span);
    lap_div.appendChild(lap_time_span);
    laps.appendChild(lap_div);
    lap_index++;
});
function startSw () {
    msecs++;
	$('#sw_msecs').text(msecs < 10 ? '0' + msecs : msecs);
	if (msecs > 99) {
        seconds++;
        $('#sw_secs').text(seconds < 10 ? '0' + seconds : seconds);
        msecs = 0;
        $('#sw_msecs').text('00');
    }
    if (seconds > 59){
        minutes++;
        $('#sw_mins').text(minutes < 10 ? '0' + minutes : minutes);
        seconds = 0;
    }
}
