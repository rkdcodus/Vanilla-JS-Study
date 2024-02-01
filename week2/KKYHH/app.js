let count = 0;
const number = document.querySelector('.number');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', buttonClick));

function buttonClick(e) {
  const styles = e.currentTarget.classList;

  if (styles.contains('decrease')) decrease();
  if (styles.contains('reset')) reset();
  if (styles.contains('increase')) increase();

  updateColor();
}

function decrease() {
  count -= 1;
  updateNumber();
}

function reset() {
  count = 0;
  updateNumber();
}

function increase() {
  count += 1;
  updateNumber();
}

function updateNumber() {
  number.textContent = count;
}

function updateColor() {
  number.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
}
