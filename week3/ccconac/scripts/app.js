import { addCarouselListener, addSurpriseListener } from './listener.mjs';

const previousButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const surpriseButton = document.getElementById('surprise-btn');

addCarouselListener(previousButton, -1);
addCarouselListener(nextButton, 1);
addSurpriseListener(surpriseButton);
