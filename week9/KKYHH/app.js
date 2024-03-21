const loop = ['./index.html', './indexLoop.html', './indexLoop2.html', './indexLoop3.html']
let currentLoop = 0;

const video = document.querySelector('.video')
const showTitle = document.querySelector('.video-overlay');
const showTitleFont = document.querySelector('.title');
const showTitleBtn = document.querySelector('.btn-overlay');
const changeBtnStyle = document.querySelector('.btn-switch');
const moveSwitch = document.querySelector('.switch');
const nextBtn = document.querySelector('.btn-next');


showTitleBtn.addEventListener('click', () => {
  showTitle.classList.toggle('video-overlay-off');
  showTitleFont.classList.toggle('video-overlay-off');
  nextBtn.classList.toggle('video-overlay-off')
  showTitleBtn.classList.toggle('btn-overlay-off');
  changeBtnStyle.classList.toggle('btn-switch-off');
});

changeBtnStyle.addEventListener('click', () => {
  if (!moveSwitch.classList.contains('slide')) {
    moveSwitch.classList.add('slide')
    video.pause();
  }
  else {
    moveSwitch.classList.remove('slide')
    video.play();
  }
})

// const nextLoop = () => {
//   currentLoop += 1;
//   console.log(currentLoop);
//   window.location.href = loop[currentLoop];
// }

// nextBtn.addEventListener('click', nextLoop)
