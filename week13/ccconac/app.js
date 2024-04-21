import { LIPSUM } from './lipsum.mjs';

const generator = document.querySelector('.generator');
const paragraphsInput = document.querySelector('.paragraphs-input');
const lipsums = document.querySelector('.lipsums');

const generateLipsum = (event) => {
  event.preventDefault();

  const value = parseInt(paragraphsInput.value);
  const lipsum = LIPSUM.slice(0, value)
    .map((text) => `<p>${text}</p>`)
    .join('');

  lipsums.innerHTML = lipsum;
};

const alertMessage = () => {
  let value = parseInt(paragraphsInput.value);

  if (value < 0 || value > 9) alert('0 이상 9 이하의 숫자를 입력해 주세요.');
};

paragraphsInput.addEventListener('input', alertMessage);
generator.addEventListener('submit', generateLipsum);
