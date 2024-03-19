import { CLOTHES } from './clothes.mjs';
import displayClothes from './displayClothes.mjs';

const buttonSection = document.querySelector('.buttons-wrap');

const createCategoryArray = () => {
  const category = ['ALL'];

  CLOTHES.forEach((item) => {
    if (!category.includes(item.category)) {
      category.push(item.category);
    }
  });

  return category;
};

const filterClothesItem = (category) => {
  if (category === 'ALL') return displayClothes(CLOTHES);

  const clothesCategory = CLOTHES.filter((item) => item.category === category);

  displayClothes(clothesCategory);
};

const displayButtons = () => {
  const category = createCategoryArray();
  const buttons = category.map((category) => {
    return `<button class="filter-button">${category}</button>`;
  });

  buttonSection.innerHTML = buttons.join('\n');

  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const category = e.target.innerHTML;
      filterClothesItem(category);
    });
  });
};

export default displayButtons;
