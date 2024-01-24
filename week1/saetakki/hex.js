const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const targetButton = document.querySelector('#btn');
const currentColor = document.querySelector('.color');
const generateHexCode = () => {
  const code = Array.from(
    { length: 6 },
    () => hex[Math.floor(Math.random() * hex.length)]
  );
  return '#' + code.join('');
};

targetButton.addEventListener('click', function () {
  const randomHexCode = generateHexCode();
  currentColor.textContent = randomHexCode;
  document.body.style.backgroundColor = randomHexCode;
});
