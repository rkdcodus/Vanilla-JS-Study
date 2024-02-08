import { ANIMALS } from './animals.mjs';

const animalImage = document.getElementById('img');
const animalName = document.getElementById('animal-name');
const animalType = document.getElementById('animal-type');
const animalDescription = document.getElementById('description');

export const showAnimal = (current) => {
  const animal = ANIMALS[current];

  animalImage.src = animal.image;
  animalName.textContent = animal.name;
  animalType.textContent = animal.type;
  animalDescription.textContent = animal.text;
};
