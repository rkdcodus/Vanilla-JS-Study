const openButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal-background');
const closeButton = document.querySelector('.close-modal');

const openModal = () => {
  modal.classList.add('visible-modal');
};

const closeModal = () => {
  modal.classList.remove('visible-modal');
};

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
