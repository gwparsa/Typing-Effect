let captionLength = 0;
let caption;
let status;
let discordStatus;

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    testTypingEffect();
});

function testTypingEffect() {
    statusChanger();
    caption = `Parsa Sorsori<br> Software Engineer<br><span class='discordStatus'>${status}</span><br><br><br>Hello there! My name is Parsa and I am a 20-year-old engineer from Iran. My interests lie in the field of computers and technologies, which is why I am currently studying Computer Engineering at QIAU. I discovered my passion for programming at the age of 11 and since then, I have been learning the C# language. At 16, I began exploring front-end web development and UI designing.<br><br><br><a href='http://gwparsa.ir/projects'>/Projects</a><a href='http://gwparsa.ir/contact'>/Contact</a><a href='http://gwparsa.ir/'>/Home</a><br><br>`; //input text here
    type();   
};

const statusChanger = () => {
    const nowDate = new Date().getHours();
    if(discordStatus) {
        return status = "Online on Discord!";
    }else if(nowDate >= 12 && nowDate <= 23) {
        return status = "I'm available! Contact me.";
    }else{
        return status = "I'm sleeping right now.";
    }
};

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 0); //speed of writing effect
    } else {
        captionLength = 0;
        caption = '';
    }
};

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
};