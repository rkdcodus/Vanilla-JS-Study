const colors = ['green', 'red', 'rgba(133,254,200)', '#FE7A1E', 'gray'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function btnHandler() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

btn.addEventListener('click', btnHandler);

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}