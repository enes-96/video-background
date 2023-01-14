"use strict";
const video = document.getElementById("video");
const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => {
  video.play();
});
