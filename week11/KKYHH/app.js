const video = document.querySelector('.video');
const tabBtn = document.querySelector('.tab-btn');
const btnBox = document.querySelector('.btn-box');
const textBox = document.querySelector('.text-box');
const bearImg = document.querySelector('.bear');
const bearHello = document.querySelector('.bear-hello');

window.addEventListener('load', () => {
  video.play();
  textBox.style.opacity = '100';
  tabBtn.style.opacity = '100';
  btnBox.style.opacity = '100';
  bearHello.style.opacity = '100';
});

const btnThinking = document.getElementById('Thiknking');
const btnV = document.getElementById('V');
const btnFlower = document.getElementById('Sup?');
const btnContent = document.querySelector('.btn-content');

document.addEventListener('DOMContentLoaded', () => {
  btnThinking.addEventListener('click', () => {
    bearHello.style.display = 'none';
    bearImg.src = './img/bear_4.png';
    bearImg.style.display = 'block';
    btnContent.innerHTML = '';
    btnContent.insertAdjacentHTML(
      'beforeend',
      `
      <h4>Thiknking Bear</h4>
      <p>
      The Thinking Bear is a captivating creature, often seen with a pensive expression and displaying behaviors that resemble deep contemplation.
      <br><br>
      Known for their large size and herbivorous diet, they possess impressive foraging skills. While primarily plant-eaters, they occasionally supplement their diet with protein-rich meals, including small animals.
      <br><br>
      Thinking Bears are sociable beings, engaging in group activities and showing curiosity towards both fellow bears and humans.
      <br><br>
      Each bear has its own unique personality; some are playful, while others are more reserved. This diversity adds to their charm, making them endlessly fascinating to observe and appreciate.
      </p>
    `
    );
  });

  btnV.addEventListener('click', () => {
    bearHello.style.display = 'none';
    bearImg.src = './img/bear_2.png';
    bearImg.style.display = 'block';
    btnContent.innerHTML = '';
    btnContent.insertAdjacentHTML(
      'beforeend',
      `
      <h4>V Bear</h4>
      <p>
      The bear spreading its legs in a "V" shape is a captivating sight, often observed when the bear is resting or asserting its territory. This unique posture is typically used by bears to bask in the sunlight or simply to find comfort.
      <br><br>
      Moreover, this behavior often sparks curiosity among onlookers, showcasing the diverse behaviors of bears in the wild. They often boast remarkable beauty, captivating our fascination.
      <br><br>
      Bears exhibiting this behavior are intriguing, displaying both the natural beauty of bears and their fascinating behaviors. Observing them closely is always a delight!
      </p>
    `
    );
  });

  btnFlower.addEventListener('click', () => {
    bearHello.style.display = 'none';
    bearImg.src = './img/bear_3.png';
    bearImg.style.display = 'block';
    btnContent.innerHTML = '';
    btnContent.insertAdjacentHTML(
      'beforeend',
      `
      <h4>Sup? Bear</h4>
      <p>
      The bear making the "What's up?" gesture is a fascinating sight, often observed when the bear is curious or alert. This gesture typically involves the bear raising its head and extending its neck upward, as if trying to get a better view of its surroundings or to express interest in something.
      <br><br>
      This behavior is a demonstration of the bear's inquisitive nature, showing its desire to explore and understand its environment. It may also indicate a state of heightened awareness, with the bear attentively observing its surroundings for any signs of danger or opportunity.
      <br><br>
      Overall, witnessing a bear making the "What's up?" gesture provides a glimpse into the complex behaviors and expressions of these remarkable creatures in the wild.
      </p>
    `
    );
  });
});
