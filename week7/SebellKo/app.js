import data from './data.js';
import createFaqItemTemplate from './createFaqItemTemplate.js';

const faqList = document.getElementById('faqList');

const SHOW_IMG_URL = './images/square-plus-regular.svg';
const HIDE_IMG_URL = './images/square-minus-regular.svg';

const template = data.reduce((acc, cur) => {
  acc += createFaqItemTemplate(cur.title, cur.answer);
  return acc;
}, ``);

faqList.insertAdjacentHTML('beforeend', template);
const listItems = [...faqList.children];

listItems.forEach((li) => {
  const toggleButton = li.querySelector('img');
  const answer = li.querySelector('p');

  toggleButton.addEventListener('click', () => {
    const currentType = toggleButton.getAttribute('src');

    if (currentType === SHOW_IMG_URL) {
      answer.style.display = 'block';
      toggleButton.setAttribute('src', HIDE_IMG_URL);
    }

    if (currentType === HIDE_IMG_URL) {
      answer.style.display = 'none';
      toggleButton.setAttribute('src', SHOW_IMG_URL);
    }
  });
});
