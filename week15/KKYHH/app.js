const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');
const number = document.querySelector('.number');

let slideIndex = 0;

const updateNumber = () => {
  number.textContent = slideIndex + 1;
}

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex -= 1;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateNumber();
  }
});

nextBtn.addEventListener('click', () => {
  if (slideIndex < 3) {
    slideIndex += 1;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`
    updateNumber();
  }
})

updateNumber();