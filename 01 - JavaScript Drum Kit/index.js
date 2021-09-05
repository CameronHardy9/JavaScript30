const drumKeys = document.getElementsByClassName("key");
const audio = document.getElementsByTagName("audio");

drumKeys.forEach(key => key.addEventListener("transitionend", removeTransition));



window.addEventListener("keydown", function (e) {
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);
    let drumKey = document.querySelector(`div[data-key="${e.key}"]`);
    if (!audio) {
        return;
    }
    drumKey.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
});


function removeTransition(e) {
    console.log(e.propertyName)
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("playing");
}