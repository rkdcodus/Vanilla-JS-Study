const menus = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.png",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.png",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.png",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.png",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.png",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.png",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.png",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.png",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.png",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuBoard = document.querySelector(".menuboard");
const category = document.querySelector(".category");

const htmlTagHandle = (menu) => {
  return `<article>
  <ul class="menu-item">
    <li><img src="${menu.img}" alt="menu-img" /></li>
    <li>
      <ul class="menu-header">
        <li>${menu.title}</li>
        <li>$${menu.price}</li>
      </ul>
      <p class="menu-dscrp">
      ${menu.desc}
      </p>
    </li>
  </ul>
</article>`;
};

const loadData = () => {
  let displayMenu = menus.map((menu) => {
    const htmlTag = htmlTagHandle(menu);
    return htmlTag;
  });

  displayMenu = displayMenu.join("");
  menuBoard.innerHTML = displayMenu;
};

const clickCategory = (category) => {
  let displayMenu = menus.map((menu) => {
    const htmlTag = htmlTagHandle(menu);
    if (menu.category === category) return htmlTag;
  });

  displayMenu = displayMenu.join("");
  menuBoard.innerHTML = displayMenu;
};

window.addEventListener("DOMContentLoaded", loadData);
category.addEventListener("click", (e) => {
  const target = e.target.id;
  if (target === "all") loadData();
  else if (target) clickCategory(target);
});
