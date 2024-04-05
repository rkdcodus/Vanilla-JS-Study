const datas = [
  {
    tab: "history",
    img: "https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg",
    content:
      "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
  },
  {
    tab: "vision",
    img: "https://i.pinimg.com/564x/d3/c7/af/d3c7af9fd25d1716a8a8c50c17d989f9.jpg",
    content:
      "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
  },
  {
    tab: "goals",
    img: "https://i.pinimg.com/736x/d8/83/ae/d883ae7013b58499c18e4b4c624748a7.jpg",
    content:
      "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
  },
];

const tabContainer = document.getElementById("tab-container");
const content = document.getElementById("content");
const img = document.getElementById("img");
const tabs = document.querySelectorAll(".tabs");

const removeallClickEvent = () => {
  tabs.forEach((tab) => {
    console.log(tab);
    tab.style.backgroundColor = "#eae5dd";
  });
};

const clickHandle = (e) => {
  const clickTab = e.target;
  removeallClickEvent();
  clickTab.style.backgroundColor = "#fff5cb";
  datas.forEach((data) => {
    if (clickTab.id === data.tab) {
      content.innerText = data.content;
      img.src = data.img;
    }
  });
};

tabContainer.addEventListener("click", clickHandle);
window.addEventListener("DOMContentLoaded", () => {
  tabs[0].style.backgroundColor = "#fff5cb";
  content.innerText = datas[0].content;
  img.src = datas[0].img;
});
