const clothesSection = document.querySelector('.clothes-container');

const displayClothes = (clothesCard) => {
  let clothes = clothesCard.map((item) => {
    return `<div class="clothes-card">
      <div class="img-wrap">
        <img
          class="clothes-image"
          src=${item.image}
        />
      </div>
      <div class="clothes-info">
        <h2 class="clothes-name">${item.name}</h2>
        <span>${item.price}</span>
        <span class="clothes-description">${item.description}</span>
      </div>
    </div>`;
  });

  clothesSection.innerHTML = clothes.join('\n');
};

export default displayClothes;
