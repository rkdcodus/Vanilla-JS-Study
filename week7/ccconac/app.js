const questionCards = document.querySelectorAll('.question-card');

questionCards.forEach((card) => {
  const button = card.querySelector('.card-button');

  button.addEventListener('click', () => {
    const answer = card.childNodes[3];
    const question = card.childNodes[1];

    answer.classList.toggle('show-answer');

    const closeAllCards = () => {
      questionCards.forEach((q) => {
        const answer = q.childNodes[3];
        const qs = q.childNodes[1];
        const button = q.querySelector('.card-button');

        answer.style.display = 'none';
        qs.style.paddingBottom = '0';
        button.innerHTML = '<i class="far fa-plus-square"></i>';
      });
    };

    if (answer.style.display === 'none' || answer.style.display === '') {
      closeAllCards();

      answer.style.display = 'flex';
      question.style.paddingBottom = '20px';
      button.innerHTML = '<i class="far fa-minus-square"></i>';
    } else {
      answer.style.display = 'none';
      question.style.paddingBottom = '0';
      button.innerHTML = '<i class="far fa-plus-square"></i>';
    }
  });
});
