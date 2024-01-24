const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

function hexRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function btnHexHandler() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[hexRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

btn.addEventListener('click', btnHexHandler);


console.log(hexRandomNumber());
