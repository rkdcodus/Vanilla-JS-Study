import { ANIMALS } from './animals.mjs';

let currentAnimal = 0;

const carousel = (step) => {
  currentAnimal += step;
  currentAnimal = currentAnimal < 0 ? ANIMALS.length - 1 : currentAnimal % ANIMALS.length;
};

const getCurrentAnimal = () => currentAnimal;

const setCurrentAnimal = (index) => (currentAnimal = index);

export { setCurrentAnimal, getCurrentAnimal, carousel };
