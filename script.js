
const buttons = document.querySelectorAll('.button--toggle');
const container = document.querySelector('.container');
const text = document.querySelector('.text');
const playState = document.querySelector('#playState');
const playPauseBtn = document.querySelector('#play-pause-btn')
const audio = document.querySelector('audio')

let isPlaying = false;
let scrollSpeed = 25; // en secondes



playPauseBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();

    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
})



function setScrollSpeed(speed) {
  scrollSpeed = speed;
  text.style.animationDuration = `${scrollSpeed}s`;
}

setScrollSpeed(scrollSpeed);

text.addEventListener('animationiteration', function() {
  if (!isPlaying) {
    return;
  }
  container.classList.remove('playing');
  setTimeout(function() {
    container.classList.add('playing');
  }, 10);
});

for (let button of buttons) {
	button.addEventListener('click', function () {
		button.classList.toggle('is-active');
	});
}

function playVideo(videoPath) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoPath;
    videoPlayer.play();
  };