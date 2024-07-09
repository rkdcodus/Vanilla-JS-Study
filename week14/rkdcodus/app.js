const input = document.getElementById("input");
const submitButton = document.getElementById("submitButton");
const editButton = document.getElementById("editButton");
const clearButton = document.getElementById("clearButton");
const list = document.getElementById("list");
let itemList = [];
let editId = -1;

// li 태그 생성
const createHTML = (text, id) => {
  const newItem = `
  <li id=${id}>
    <span id="itemText">${text}</span>
    <button id="edit">수정</button>
    <button id="delete">삭제</button>
  </li>
  `;

  return newItem;
};

// itemList 출력
const printItem = () => {
  clear();

  itemList.forEach((item, index) => {
    const newItem = createHTML(item, index);
    list.insertAdjacentHTML("beforeend", newItem);
  });

  if (!clearButton.classList.contains("show")) {
    clearButton.classList.add("show");
  }

  input.value = "";
};

// li 태그 전부 삭제
const clear = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

// 아이템 추가
const submit = () => {
  itemList.push(input.value);
  printItem();
};

// 아이템 수정
const editComplete = () => {
  submitButton.classList.remove("hide");
  editButton.classList.remove("show");
  itemList[editId] = input.value;
  printItem();
};

// 아이템 삭제
const deleteItem = (target) => {
  list.removeChild(target);
  itemList.splice(target.id);
  if (!itemList.length) {
    clearButton.classList.remove("show");
  }
};

// 아이템 수정시 input 창 변경
const editItem = (target) => {
  const text = itemList[target.id];
  editId = target.id;
  submitButton.classList.add("hide");
  editButton.classList.add("show");
  input.value = text;
};

// 아이템 삭제 or 수정 결정
const clickItem = (e) => {
  const option = e.target.id;
  const selectedItem = e.target.parentNode;

  if (option === "delete") deleteItem(selectedItem);
  else if (option === "edit") editItem(selectedItem);
};

// 아이템 전체 삭제
const clearItem = () => {
  clear();
  itemList = [];
  clearButton.classList.remove("show");
};

submitButton.addEventListener("click", submit);
editButton.addEventListener("click", editComplete);
clearButton.addEventListener("click", clearItem);
list.addEventListener("click", clickItem);
