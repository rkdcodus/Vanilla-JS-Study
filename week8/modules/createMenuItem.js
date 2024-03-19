const createMenuItem = (title, price, description, src) => {
  return `<div class="menu_wrapper">
        <img src=${src} alt=${title} />
        <div class="menu_item">
          <div class="menu_detail">
            <h3>${title} Pancakes</h3>
            <span class="menu_price">$${price}</span>
          </div>
          <p class="menu_description">
            ${description}
          </p>
        </div>
      </div>`;
};

export default createMenuItem;
