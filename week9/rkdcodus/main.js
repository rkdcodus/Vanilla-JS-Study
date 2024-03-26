const toggleText = document.getElementById("toggle-text");
const video = document.getElementById("fireword-video");
const toggleSwitch = document.querySelector(".switch");

const toggleHandle = (e) => {
  e.target.classList.toggle("play");
  if (toggleText.innerText === "PAUSE") {
    toggleText.innerText = "PLAY";
    video.pause();
  } else if (toggleText.innerText === "PLAY") {
    toggleText.innerText = "PAUSE";
    video.play();
  }
};

toggleSwitch.addEventListener("click", toggleHandle);
