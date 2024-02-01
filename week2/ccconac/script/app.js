import { updateCount } from './updateCount.mjs';
import { counter } from './counter.mjs';

const buttons = document.querySelector('#buttons');
let count = 0;

buttons.addEventListener('click', (event) => {
  count = counter(count, event);
  updateCount(count);
});
