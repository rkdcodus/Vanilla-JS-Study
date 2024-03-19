import { CLOTHES } from './clothes.mjs';
import displayClothes from './displayClothes.mjs';
import displayButtons from './displayButtons.mjs';

document.addEventListener('DOMContentLoaded', () => {
  displayClothes(CLOTHES);
  displayButtons();
});
