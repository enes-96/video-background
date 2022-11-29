"use strict";
const video = document.querySelector("video");
const overlay = document.querySelector(".overlay");

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    if (video.paused) {
      video.play();
      overlay.classList.toggle("hide");
    } else {
      video.pause();
      overlay.classList.toggle("hide");
    }
  }
});

window.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    overlay.classList.toggle("hide");
  } else {
    video.pause();
    overlay.classList.toggle("hide");
  }
});
