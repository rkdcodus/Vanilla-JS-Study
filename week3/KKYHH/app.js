const reviews = [
  {
    id: 1,
    name: '잔디도치',
    job: '첫 번째 잔디일기 캐릭터',
    img: './public/mainCharacter.png',
    text: '저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.'
  },
  {
    id: 2,
    name: '잔디왕관',
    job: '두 번째 잔디일기 캐릭터',
    img: './public/subCharacter.png',
    text: '모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.'
  },
  {
    id: 3,
    name: '잔디일기',
    job: '세 번째 잔디일기 캐릭터',
    img: './public/introCharacter.png',
    text: '모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다.'
  }
]

const img = document.getElementById('profile');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const randomBtn = document.querySelector('.btn-2')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})

const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
})

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
})

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * 3)
  showPerson();
})