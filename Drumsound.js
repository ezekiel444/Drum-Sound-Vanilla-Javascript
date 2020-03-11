window.addEventListener("keydown", soundPlay);

function soundPlay(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // unknown key hit no effect
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //just skip if not transform
  this.classList.remove("playing");
}
