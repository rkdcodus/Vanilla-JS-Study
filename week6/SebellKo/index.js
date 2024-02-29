const modal = document.getElementById('modal');
const modalContents = document.getElementById('modalContents');
const modalOpenButton = document.getElementById('modalOpenButton');
const modalCloseButton = document.getElementById('modalCloseButton');

const logInForm = `<form class="login_form">
<h2>로그인</h2>
<div>
<label for="email">이메일</label>
<input id="email" type="text" />
</div>
<div>
<label for="password">비밀번호</label>
<input id="password" type="password" />
</div>
<button>확인</button>
</form>`;

const createModal = (contents) =>
  modalContents.insertAdjacentHTML('beforeend', contents);
const resetModal = () => modalContents.removeChild(modalContents.lastChild);

modalOpenButton.addEventListener('click', () => {
  createModal(logInForm);
  modal.style.display = 'flex';
});
modalCloseButton.addEventListener('click', () => {
  modal.style.display = 'none';
  resetModal();
});
