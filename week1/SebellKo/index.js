const simpleBtn = document.querySelector('#simpleBtn');
const hexBtn = document.querySelector('#hexBtn');
const colorSpan = document.querySelector('#color');
const background = document.querySelector('#container');
const clickBtn = document.querySelector('#clickBtn');

const SELECTED = 'hsl(205, 78%, 60%)';
const UNSELECTED = '#222';
const HEX = 16;
const RGB = 256;

let isSimpleSelected = true;

const createRandomRgb = () => {
  return Array.from({ length: 3 }, () => Math.floor(Math.random() * RGB));
};

const convertRgbToHex = () => {
  const rgb = createRandomRgb();
  const hex = rgb.map((color) => {
    const hex = color.toString(HEX);
    return hex.length === 1 ? `0${hex}` : hex;
  });
  return `#${hex.join('')}`;
};

const setColor = (isSimple) => {
  const color = isSimple
    ? `rgba(${createRandomRgb().join(', ')})`
    : convertRgbToHex();
  background.style.backgroundColor = color;
  colorSpan.innerText = color;
};

const changeBtn = (isSimple) => {
  simpleBtn.style.color = isSimple ? SELECTED : UNSELECTED;
  hexBtn.style.color = isSimple ? UNSELECTED : SELECTED;
  isSimpleSelected = isSimple;
};

window.addEventListener('load', setColor(isSimpleSelected));
simpleBtn.addEventListener('click', () => changeBtn(true));
hexBtn.addEventListener('click', () => changeBtn(false));
clickBtn.addEventListener('click', () => setColor(isSimpleSelected));
