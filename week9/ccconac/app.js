const switchButton = document.querySelector('.switch-button');
const video = document.querySelector('.video-container');
const loading = document.querySelector('.loading');

const hideLoadingIcon = () => {
  loading.classList.add('hide-loading');
};

const controlVideo = () => {
  if (!switchButton.classList.contains('slide')) {
    switchButton.classList.add('slide');
    video.pause();
  } else {
    switchButton.classList.remove('slide');
    video.play();
  }
};

window.addEventListener('load', hideLoadingIcon);
switchButton.addEventListener('click', controlVideo);
