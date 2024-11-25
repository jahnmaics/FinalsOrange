const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "DRESS",
    price: 120,
    colors: [
      {
        code: "black",
        img: "GRAY.jpg",
      },
      {
        code: "black",
        img: "FLORALGREEN.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "SHIRT",
    price: 120,
    colors: [
      {
        code: "black",
        img: "NET.jpg",
      },
      {
        code: "black",
        img: "net3.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "SLACKS",
    price: 120,
    colors: [
      {
        code: "black",
        img: "SLACKS3.jpg",
      },
      {
        code: "black",
        img: "SLACKS2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "SHOES",
    price: 140,
    colors: [
      {
        code: "black",
        img: "shoes.jpg",
      },
      {
        code: "black",
        img: "shoes1.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₱" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

document.getElementById('checkoutBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent page reload
  console.log("Button clicked and page reload prevented!");

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const expiryMonth = document.getElementById('expiryMonth').value.trim();
  const expiryYear = document.getElementById('expiryYear').value.trim();
  const cvv = document.getElementById('cvv').value.trim();

  // Check if all fields are filled
  if (!name || !phone || !address || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      alert('You must fill up all fields!');
  } else {
      alert('Thank you for buying this item!');

      
      setTimeout(() => {
          window.location.reload();
      }, 2000); 
  }
});

window.addEventListener('resize', function () {
  const fontSize = Math.max(16, window.innerWidth / 100); // Adjust base size
  document.documentElement.style.fontSize = fontSize + 'px';
});