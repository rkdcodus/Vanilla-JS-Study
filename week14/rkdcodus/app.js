const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const itemList = [];

const createItem = (text, id) => {
  const newItem = `
        <li id=${id}>
          <span id="itemText">${text}</span>
          <button id="edit">수정</button>
          <button id="remove">삭제</button>
        </li>`;
  return newItem;
};

button.addEventListener("click", () => {
  itemList.push(input.value);
  const newItem = createItem(input.value, itemList.indexOf(input.value));

  list.insertAdjacentHTML("beforeend", newItem);
});
