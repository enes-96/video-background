"use strict";
const video = document.getElementById("video");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    playBtn.textContent = "Pause";
    video.play();
  } else {
    play.textContent = "Play";
    video.pause();
  }
});

document.getElementById("back").addEventListener("click", () => {
  video.currentTime -= 10;
});
document.getElementById("forward").addEventListener("click", () => {
  video.currentTime += 10;
});

document.getElementById("volUp").addEventListener("click", () => {
  switch (video.volume) {
    case 0:
      video.volume = 0.2;
      break;
    case 0.2:
      video.volume = 0.4;
      break;
    case 0.4:
      video.volume = 0.6;
      break;
    case 0.6:
      video.volume = 0.8;
      break;
    case 0.8:
      video.volume = 1;
      break;
  }
});

document.getElementById("volDown").addEventListener("click", () => {
  switch (video.volume) {
    case 1:
      video.volume = 0.8;
      break;
    case 0.8:
      video.volume = 0.6;
      break;
    case 0.6:
      video.volume = 0.4;
      break;
    case 0.4:
      video.volume = 0.2;
      break;
    case 0.2:
      video.volume = 0;
      break;
  }
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === " ") {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  if (e.key === "m") {
    if (video.volume == 0) {
      video.volume = 0.5;
    } else {
      video.volume = 0;
    }
  }
  if (e.key === "f") {
    video.currentTime -= 10;
  }
  if (e.key === "j") {
    video.currentTime += 10;
  }
  if (e.key === "ArrowUp") {
    switch (video.volume) {
      case 0:
        video.volume = 0.2;
        break;
      case 0.2:
        video.volume = 0.4;
        break;
      case 0.4:
        video.volume = 0.6;
        break;
      case 0.6:
        video.volume = 0.8;
        break;
      case 0.8:
        video.volume = 1;
        break;
    }
  }
  if (e.key === "ArrowDown") {
    switch (video.volume) {
      case 1:
        video.volume = 0.8;
        break;
      case 0.8:
        video.volume = 0.6;
        break;
      case 0.6:
        video.volume = 0.4;
        break;
      case 0.4:
        video.volume = 0.2;
        break;
      case 0.2:
        video.volume = 0;
        break;
    }
  }
});
