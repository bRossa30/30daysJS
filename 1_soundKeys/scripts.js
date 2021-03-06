const keys = document.querySelectorAll(".key");

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

window.addEventListener('keydown', playSound);

const removeTransition = (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove("playing");
}

window.addEventListener('keyup', removeTransition);

// function removeTransition(e) {
//     if (e.propertyName !== "transform") return;
//     this.classList.remove("playing");
// }

// keys.forEach(key => key.addEventListener("transitionend", removeTransition));