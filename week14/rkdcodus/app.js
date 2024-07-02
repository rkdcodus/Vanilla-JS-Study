const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
const itemList = [];

button.addEventListener("click", () => {
  itemList.push(input.value);
  const newLi = document.createElement("li");
  newLi.textContent = input.value;

  list.insertAdjacentElement("beforeend", newLi);
});
