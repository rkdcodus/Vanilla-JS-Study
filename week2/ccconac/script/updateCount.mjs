const digit = document.getElementById('digit');

export const updateCount = (count) => {
  digit.textContent = count;

  if (count < 0) {
    digit.style.color = 'red';
  } else if (count > 0) {
    digit.style.color = 'green';
  } else {
    digit.style.color = 'black';
  }
};
