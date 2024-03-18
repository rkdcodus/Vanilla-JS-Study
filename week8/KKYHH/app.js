document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.navbtn-all').addEventListener('click', () => {
    showAllProducts();
  });

  document.querySelector('.navbtn-501').addEventListener('click', () => {
    showProductsByClass('sell-501');
  });

  document.querySelector('.navbtn-502').addEventListener('click', () => {
    showProductsByClass('sell-502');
  });

  document.querySelector('.navbtn-505').addEventListener('click', () => {
    showProductsByClass('sell-505');
  });

  document.querySelector('.navbtn-LVC').addEventListener('click', () => {
    showProductsByClass('sell-LVC');
  });
});

const showAllProducts = () => {
  document.querySelectorAll('.sell').forEach((product) => {
    product.style.display = 'block';
  });
}

const showProductsByClass = (className) => {
  document.querySelectorAll('.sell').forEach((product) => {
    if (product.classList.contains(className)) {
      product.style.display = 'block';
    }
    if (!product.classList.contains(className)) {
      product.style.display = 'none';
    }
  });
}
