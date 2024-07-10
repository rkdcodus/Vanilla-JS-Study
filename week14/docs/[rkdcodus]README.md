# Grocery Bud

- CRUD 기능이 있는 장바구니 리스트이다.
- 장바구니 리스트에 아이템을 추가하고 삭제할 수 있다.
- 아이템명을 수정할 수 있다.
- 리스트에 담긴 아이템들을 한번에 삭제할 수 있다.

<br>

## ✅ 구현 전 기능 목록

- [x] UI 구현
- [x] 아이템 create 기능 구현
- [x] 아이템 read 기능 구현
- [x] 아이템 update 기능 구현
- [x] 아이템 delete 기능 구현
  - [x] 아이템 삭제 버튼
  - [x] 아이템 전체 clear 버튼

<br>

## 📷 화면 캡처
![2024-07-10 22;54;40](https://github.com/CHZZK-Study/Vanilla-JS-Study/assets/97906653/9925a820-98c4-4a09-8753-0d595b3d8d8e)

## 🔎 개념 정리

### 1️⃣ insertAdjacentElement()와 insertAdjacentHTML() 차이

전에는 이 둘의 차이를 잘 모르고 같은 거라 생각하고 있었다. 결론적으로 말하자면 특정 요소에 새로운 내용을 삽입하는 기능은 동일하지만 받는 인수의 형태가 다르다.

<br>

#### insertAdjacentElement(position, element)

이 메서드에서 인수로 받는 element는 `document.createElement` 로 생성된 DOM 요소를 말한다.

```jsx
// 예시
const newElement = document.createElement("div");
newElement.textContent = "새로운 요소";
document.querySelector("#target").insertAdjacentElement("beforebegin", newElement);
```

<br>

#### insertAdjacentHTML(position, html)

이 메서드는 html 문자열을 인수로 받는다.

```jsx
// 예시
const htmlString = "<div>새로운 HTML 요소</div>";
document.querySelector("#target").insertAdjacentHTML("beforebegin", htmlString);
```

<br>

### 2️⃣ delete 와 splice()의 차이

자바스크립트 배열에서 특정 인덱스의 요소를 삭제하고 싶을 땐 2가지 방법이 있다.

`delete`: 삭제된 요소는 'undefined'로 저장, 배열의 길이 유지 <br>
`splice()`: 요소를 배열에서 완전히 제거, 배열의 길이 바뀜

splice()는 배열을 재구성하여 빈 공간이 생기지 않는다. 삭제함과 동시에 삭제한 위치에 바로 새 요소를 삽입할 수도 있어 유연하게 배열을 사용할 수 있다.

<br>

## 📝 구현 설명

### itemList 데이터 구조

```jsx
let itemList = [];
```

장바구니에 추가된 아이템들은 itemList 배열에 저장된다. 배열의 인덱스 번호가 아이템의 고유 id가 된다.

<br>

### 장바구니에 아이템 추가하기

```jsx
const submit = () => {
  itemList.push(input.value);
  printItem();
};

submitButton.addEventListener("click", submit);
```

input 창과 관련된 버튼은 총 2 종류가 있다. submit 버튼과 edit 버튼.

submit 버튼은 새로운 아이템을 생성하고 edit 버튼은 아이템을 수정한다. edit 버튼은 아래에서 설명할 예정!

생각해보니 input창에 빈 값인 채로 제출 버튼을 누르면 비어잇는 아이템 창이 생성된다. 이를 막기 위해 빈 문자열이 들어왔다면 무시하도록 개선하였다.

```jsx
const submit = () => {
  if (input.value === "") return;
  itemList.push(input.value);
  printItem();
};
```

<br>

### itemList 화면에 반영하기

```jsx
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
```

가장 먼저 전에 반영된 아이템들을 모두 삭제한다. 그렇지 않으면 아이템이 중복되어 화면에 반영된다. 그 후 itemList 를 순회하여 아이템마다 li태그를 생성해 추가한다. 아이템이 하나 이상이므로 clear 버튼을 활성화한다. 그리고 새로운 값을 받을 수 있도록 input 창을 비워준다.

<br>

```jsx
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
```

li 태그 생성 함수는 아이템 text와 id(itemList 인덱스 번호)를 파라미터로 받도록 했다. 아이템들은 서로 구분해야하기 때문에 각자의 고유번호가 필요하다.

<br>

```jsx
// li 태그 전부 삭제
const clear = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};
```

clear() 함수는 화면에 반영된 li태그들을 전부 삭제한다. list는 li태그를 감싸는 부모 요소, ul 태그를 가리킨다. ul 태그의 자식요소를 한번에 삭제하는 메서드는 없는 것 같다. 대신에 firstChild로 자식 요소를 하나씩 선택해 removeChild 메서드로 제거해주는 방법을 사용했다.

<br>

### 아이템 삭제하거나 수정하기

먼저 삭제 버튼을 눌렀는지 수정 버튼을 눌렀는지 확인해야한다.

```jsx
// 아이템 option 버튼 판단
const clickItemOption = (e) => {
  const { DELETE, EDIT } = OPTIONS;
  const option = e.target.id;
  const selectedItem = e.target.parentNode;

  if (option === DELETE) deleteItem(selectedItem);
  else if (option === EDIT) editItem(selectedItem);
};

list.addEventListener("click", clickItemOption);
```

버튼의 id를 통해 삭제 버튼인지 수정 버튼인지 확인한다. 하지만 선택된 e.target은 li태그의 자식요소인 button 태그를 가리키고 있다. li태그를 선택하기 위해 .parentNode를 사용했다.

<br>

#### 아이템 삭제 기능

삭제일 경우 deleteItem 함수를 호출한다.

```jsx
// 아이템 삭제
const deleteItem = (target) => {
  itemList.splice(target.id, 1);
  printItem();

  if (!itemList.length) {
    clearButton.classList.remove(SHOW);
  }
};
```

해당 item은 itemList에서 제거해준다.
splice() 메서드를 사용할 때는 index와 제거할 요소의 개수를 인수로 받는다.
itemList가 변경되었지만 아직 화면에 반영된 li태그의 id는 과거의 인덱스이다. 맞춰주기 위해 printItem()으로 업데이트된 itemList로 화면에 반영해준다.

#### 아이템 수정 기능

```jsx
// 아이템 수정시 input 창 변경
const editItem = (target) => {
  const text = itemList[target.id];

  editId = target.id;
  input.value = text;
  submitButton.classList.add(HIDE);
  editButton.classList.add(SHOW);
};
```

아이템 수정 버튼을 누르면 input창에서 수정할 수 있다. 수정하기 전에 input창과 버튼을 바꿔줘야한다.
또한 수정할 아이템의 id를 전역변수로 저장해 edit 버튼을 눌렀을 때 업데이트할 아이템을 찾아 업데이트 한다.

```jsx
// 아이템 수정
const editComplete = () => {
  itemList[editId] = input.value;
  submitButton.classList.remove(HIDE);
  editButton.classList.remove(SHOW);

  printItem();
};
```

edit 버튼을 눌렀을 때 호출되는 함수이다. 수정된 text로 업데이트 해주고 제출버튼을 다시 바꿔준다. 그리고 새로 바뀐 itemList를 다시 화면에 반영해준다.
