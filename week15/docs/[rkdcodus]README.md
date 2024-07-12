# 이미지 슬라이더 만들기

- next 버튼을 클릭하면 다음 이미지를 보여준다
- prev 버튼을 클릭하면 전 이미지를 보여준다

# 구현할 기능

- [x] UI 구현
- [x] 이미지 슬리이딩 기능 구현
- [x] 이미지 불러오기

#### 확장 기능

- [x] 전체화면 기능
- [x] 전체화면 후 마우스가 움직이지 않으면 버튼이 잠시 보이지 않도록 구현해보기
- [ ] 마우스 드래그 앤 드롭 이벤트로 슬라이딩 기능 구현해보기
- [ ] 마우스가 사진 위에 있지 않았을 경우, 일정 시간마다 자동으로 이미지 슬라이딩되는 기능 구현해보기

#### 개선할 점

- 이미지 넘겨질 때 눈이 불편하여 이미지 슬라이딩 효과를 바꿔봐야할 것 같다.
- 전체화면 닫을 때 esc 로 닫으면 버튼이 바뀌지 않는다.

## 구현 설명

### ✨마우스 감지하여 버튼 투명도 조절하기

```jsx
const buttons = document.querySelector(".button");
let mouse = { x: null, y: null };
```

먼저 사라지게할 요소를 querySelector로 선택한다. 마우스가 멈추면 버튼들이 사라지도록 할 것이기 때문에 button 부모 요소를 선택했다.
그리고 마우스의 위치 값을 저장할 mouse 변수도 선언해주었다.

<br>

```jsx
// 이벤트 등록
image.addEventListener("mousemove", detectMouseMove);

// 이벤트 삭제
image.removeEventListener("mousemove", detectMouseMove);
```

그리고 마우스를 감지할 배경 요소인 image에 mousemove 이벤트를 걸어주었다.
이 기능은 전체화면일 때에만 적용시킬 것이기 때문에 전체 화면 기능이 종료되면 이벤트를 제거해주어야한다.

<br>

```jsx
const detectMouseMove = (e) => {
  mouse.x = e.screenX;
  mouse.y = e.screenY;
  buttons.classList.remove("hide");
  image.style.cursor = "default";

  setTimeout(() => {
    if (mouse.x === e.screenX && mouse.y === e.screenY) {
      buttons.classList.add("hide");
      image.style.cursor = "none";
    }
  }, 2000);
};
```

mousemove로 마우스의 움직임이 감지되었을 때 실행되는 함수이다.
마우스 위치의 값을 mouse 변수에 저장하고 마우스가 움직이고 4초 후 마우스의 위치가 같은지 확인한다.
위치가 같다면 button의 투명도를 낮추는 애니메이션이 걸린 class를 달아준다.
다시 마우스가 움직인다면 버튼이 나타나야하기때문에 함수가 실행될 때마다 hide class를 지워주도록 해주었다.
추가로 마우스도 버튼과 함께 사라지도록 image 위에 있는 마우스는 `cursor: none` css style을 주었다.
<br>

```css
.hide {
  pointer-events: none;
  animation-name: fadeOut;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

여기서 중요한 것은 `animation-fill-mode`이다. `forwards`를 적어주면 애니메이션이 종료된 상태 그대로를 유지한다.
없다면 버튼이 사라지는 애니메이션 후 처음으로 돌아와 버튼이 다시 보인다.
