let lights_out = false;
let game_over = false;
let time_before_over = null;
let check_lights_interval = null;
let score = 0;
let color = false;

const main_bulb = document.getElementById('main-bulb');
const max_width = $(document).width() - 100;
const max_height = $(document).height() - 100;

function change_shwitch_position() {
    $('#switch-light').css({
        top: Math.random() * max_height,
        left: Math.random() * max_width
    });
}

function check_lights() {
    score++;
    if(time_before_over && ((performance.now() - time_before_over) > 6500))
    {
        console.log(performance.now() - time_before_over);
        end_game();
    }
}

$(document).ready(() => {
    change_shwitch_position();
});

function start_game() {
    $('#start-menu').hide();
    $('#end-screen').hide();
    $('#game').show();
    check_lights_interval = setInterval(check_lights, 1000);
}

function end_game() {
    game_over = true;
    $('#start-menu').hide();
    $('#game').hide();
    $('#end-screen').show();

    $('#score').text(score);
    clearInterval(check_lights_interval);
}

function toggle_bulb() {
    if(!lights_out){
        lights_out = !lights_out;
        change_shwitch_position();
        time_before_over = performance.now()
        $('.bulb').fadeIn();
        setTimeout(() => {
            lights_out = !lights_out;
            $('.bulb').fadeOut();
        }, Math.random() * 6000);
    }
}

function change_color() {
    color = !color;
    color ? $('.bulb').addClass('eco') : $('.bulb').removeClass('eco');
}
