$(document).ready(function(){
    $('.play_button').click(function(){
        $('.play_button_arrow').toggleClass("play_button_arrow_animate");   
        $('.play_button_music').delay(500).fadeToggle();
    });
});