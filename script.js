let captionLength = 0;
let caption = '';
let nowDate = new Date();

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    testTypingEffect();
});

function testTypingEffect() {
    caption = `${nowDate}<br><br>Parsa Sorsori - Software Engineer`; //input text here
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 0); //speed of writing effect
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}