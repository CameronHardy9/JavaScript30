let drumKeys = document.getElementsByClassName("key");
let audio = document.getElementsByTagName("audio");


window.addEventListener("keydown", function (key) {
    let audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    let drumKey = document.querySelector(`div[data-key="${key.keyCode}"]`);
    if (!audio) {
        return;
    }
    drumKey.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
});