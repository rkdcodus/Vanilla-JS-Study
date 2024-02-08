import { ANIMALS } from './animals.mjs';
import { showAnimal } from './showAnimal.mjs';
import { carousel, getCurrentAnimal, setCurrentAnimal } from './carousel.mjs';

const addCarouselListener = (button, step) => {
  button.addEventListener('click', () => {
    carousel(step);
    showAnimal(getCurrentAnimal());
  });
};

const addSurpriseListener = (button) => {
  button.addEventListener('click', () => {
    let randomAnimal = Math.floor(Math.random() * ANIMALS.length);

    setCurrentAnimal(randomAnimal);
    showAnimal(getCurrentAnimal());
  });
};

export { addCarouselListener, addSurpriseListener };
