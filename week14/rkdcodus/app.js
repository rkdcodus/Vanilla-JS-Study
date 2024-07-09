const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
let itemCount = 0;
let itemList = [];

// li 태그 생성 함수
const createHTML = (text, id) => {
  const newItem = `
  <li id=${id}>
    <span id="itemText">${text}</span>
    <button id="edit">수정</button>
    <button id="remove">삭제</button>
  </li>
  `;
  itemCount += 1;

  return newItem;
};

// 아이템 추가 함수
const createItem = () => {
  const text = input.value;
  itemList.push(text);
  const newItem = createHTML(text, itemList.indexOf(text));

  // 화면 반영
  list.insertAdjacentHTML("beforeend", newItem);
};

// 아이템 삭제 함수
const deleteItem = (target) => {
  list.removeChild(target);
  delete itemList[target.id];
  itemCount -= 1;

  if (itemCount === 0) itemList = [];
};

// 아이템 수정 함수
const editItem = () => {};

// 아이템 삭제 or 수정 결정
const clickItem = (e) => {
  const option = e.target.id;
  const selectedItem = e.target.parentNode;

  if (option === "remove") deleteItem(selectedItem);
  else if (option === "edit") {
  }
};

button.addEventListener("click", createItem);
list.addEventListener("click", clickItem);
