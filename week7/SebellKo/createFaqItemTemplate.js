const createFaqItemTemplate = (title, answer) => `<li>
<div class="faq_question_wrapper">
  <h3>${title}</h3>
  <img
    id="showAnswerButton"
    src="./images/square-plus-regular.svg"
  />
</div>
<hr />
<p class="faq_answer">
  ${answer}
</p>
</li>`;

export default createFaqItemTemplate;
