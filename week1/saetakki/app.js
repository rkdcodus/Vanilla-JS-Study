const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const targetButton = document.querySelector('#btn');
const currentColor = document.querySelector('.color');

targetButton.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const nextColor = colors[randomNumber];
  currentColor.textContent = nextColor;
  document.body.style.backgroundColor = nextColor;
});
