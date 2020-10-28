
$( "#playAllBtn" ).click(function() {
    var snd1 = new Audio("sounds/boom.wav");
    var snd2 = new Audio("sounds/clap.wav");
    var snd3 = new Audio("sounds/hihat.wav");
    var snd4 = new Audio("sounds/kick.wav");
    snd1.play();
    snd2.play();
    snd3.play();
    snd4.play();
  });

document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#playBtn').addEventListener('click', playChannel);
const channel = [];
const recordStart = Date.now();
function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
        case 'KeyA':
            soundName = 'boom';
            sound = document.querySelector('div.user_test #boom');
            break;
        case 'KeyS':
            soundName = 'clap';
            sound = document.querySelector('#clap');
            break;
        case 'KeyD':
            soundName = 'hihat';
            sound = document.querySelector('#hihat');
            break;
        case 'KeyF':
            soundName = 'kick';
            sound = document.querySelector('#kick');
            break;
    }
    if (sound) {
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime
        };
        channel.push(recordedSound);
        sound.play();
    }
}
function playChannel() {
    for (let index = 0; index < channel.length; index++) {
        const soundObject = channel[index];
        setTimeout(
            () => {
                playSound(soundObject.sound);
            },
            soundObject.time
        );
    }

}
function playSound(soundName) {
    const sound = document.querySelector('#' + soundName);
    sound.play();
}