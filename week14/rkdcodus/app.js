const input = document.getElementById("input");
const submitButton = document.getElementById("submitButton");
const editButton = document.getElementById("editButton");
const clearButton = document.getElementById("clearButton");
const list = document.getElementById("list");

const SHOW = "show";
const HIDE = "hide";
const OPTIONS = {
  DELETE: "delete",
  EDIT: "edit",
};

let itemList = [];
let editId = -1;

// li 태그 생성
const createHTML = (text, id) => {
  const newItem = `
  <li id=${id}>
    <span id="itemText">${text}</span>
    <img id="edit" class="itemBtn edit" src="icon/edit.svg" />
    <img id="delete" class="itemBtn delete" src="icon/delete.svg" />
  </li>
  `;

  return newItem;
};

// li 태그 전부 삭제
const clear = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

// itemList 출력
const printItem = () => {
  clear();

  itemList.forEach((item, index) => {
    const newItem = createHTML(item, index);
    list.insertAdjacentHTML("beforeend", newItem);
  });

  if (!clearButton.classList.contains(SHOW)) {
    clearButton.classList.add(SHOW);
  }

  input.value = "";
};

// 아이템 추가
const submit = () => {
  if (input.value === "") return;
  itemList.push(input.value);
  printItem();
};

// 아이템 수정
const editComplete = () => {
  itemList[editId] = input.value;
  submitButton.classList.remove(HIDE);
  editButton.classList.remove(SHOW);

  printItem();
};

// 아이템 삭제
const deleteItem = (target) => {
  list.removeChild(target);
  itemList.splice(target.id);

  if (!itemList.length) {
    clearButton.classList.remove(SHOW);
  }
};

// 아이템 수정시 input 창 변경
const editItem = (target) => {
  const text = itemList[target.id];

  editId = target.id;
  input.value = text;
  submitButton.classList.add(HIDE);
  editButton.classList.add(SHOW);
};

// 아이템 option 버튼 판단
const clickItemOption = (e) => {
  const { DELETE, EDIT } = OPTIONS;
  const option = e.target.id;
  const selectedItem = e.target.parentNode;

  if (option === DELETE) deleteItem(selectedItem);
  else if (option === EDIT) editItem(selectedItem);
};

// 아이템 전체 삭제
const clearItem = () => {
  clear();
  itemList = [];
  clearButton.classList.remove(SHOW);
};

submitButton.addEventListener("click", submit);
editButton.addEventListener("click", editComplete);
list.addEventListener("click", clickItemOption);
clearButton.addEventListener("click", clearItem);
