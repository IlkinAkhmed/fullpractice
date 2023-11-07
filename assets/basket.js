// open and close basket window
const openbasket = document.querySelector(".fa-bag-shopping");
const basket = document.querySelector("#basket");
const closebasket = document.querySelector(".close");
const basketDiv = document.querySelector(".basket-inside");
const message = document.querySelector(".message");


openbasket.onclick = () => {
  basket.style.transform = "translateX(0)";
  basket.style.transition = "0.4s";
};
closebasket.onclick = () => {
  basket.style.transform = "translateX(400px)";
  basket.style.transition = "0.4s";
};

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

let productArr = [];

let productArrBasket = [];

if (getLocalStorage('basket')) {
  message.textContent = getLocalStorage('basket').length
}
if (getLocalStorage("basket")) {
  productArrBasket = getLocalStorage("basket");
}





// if (getLocalStorage('basket')) {
//     productArrBasket.push(getLocalStorage('basket'))
// }

// getting api for products
const cards = document.querySelectorAll(".cards");
const url = "http://localhost:3000/Products";

function createCard(id, image, name, price, quantity) {
  const box = document.createElement("div");
  const add = document.createElement("button");
  add.textContent = "Add To Basket";

  box.innerHTML = `
            <img src="${image}" alt="">
            <div class="name">
              <h3>${name}</h3>
              <p>${price}$</p>
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div class="openedProperties">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-eye"></i>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
    `;

  add.onclick = () => {

    if (productArr.find(x => x.id === id)) {
      return
    }

    productArr.push({
      id,
      image,
      name,
      price,
      count: 1
    });

    setLocalStorage("basket", productArr);
    message.innerHTML = ''
    message.textContent = getLocalStorage("basket").length

    basketDiv.innerHTML = "";
    productArr = getLocalStorage("basket");
    productArr.forEach((items) => {
      createCardForBasketPage(items.id, items.image, items.name, items.price);
    });
    // setLocalStorage('basket',productArr)
  };

  box.append(add);
  box.classList.add("box");
  cards[0].append(box);
}

async function getData() {
  const res = await axios(url);
  data = res.data;
  data.forEach((items) => {
    createCard(items.id, items.image, items.name, items.price);
  });
}
getData();

// getting api for new products
const urlForNew = "http://localhost:3000/newProducts";

function createCardForNewProducts(id, image, name, price) {
  const newbox = document.createElement("div");
  const add = document.createElement("button");
  add.textContent = "Add To Basket";

  newbox.innerHTML = `
            <img src="${image}" alt="">
            <div class="name">
              <h3>${name}</h3>
              <p>${price}$</p>
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div class="openedProperties">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-eye"></i>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
    `;


  if (productArr.find(x => x.id === id)) {
    return
  }

  add.onclick = () => {
    productArr.push({
      id,
      image,
      name,
      price,
      count: 1
    });

    setLocalStorage("basket", productArr);

    basketDiv.innerHTML = "";

    message.innerHTML = ''
    message.textContent = getLocalStorage("basket").length

    productArr = getLocalStorage("basket");
    productArr.forEach((items) => {
      createCardForBasketPage(items.id, items.image, items.name, items.price);
    });
  };

  newbox.classList.add("box");
  newbox.append(add);
  cards[1].append(newbox);
}

async function getNewProduct() {
  const res = await axios(urlForNew);
  data = res.data;
  data.forEach((items) => {
    createCardForNewProducts(items.id, items.image, items.name, items.price);
  });
}
getNewProduct();

// basket page

function createCardForBasketPage(id, image, name, price) {
  const card = document.createElement("div");
  const remove = document.createElement("a");
  const countDiv = document.createElement("div");
  const increase = document.createElement("a")
  const decrease = document.createElement("a")
  const count = document.createElement("p")

  count.textContent = ''
  productArrBasket.forEach(element => {
    if (id === element.id) {
      count.textContent = element.count
    }
  });

  increase.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
  decrease.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'



  if (count.textContent >= 1) {
    decrease.onclick = () => {
      count.textContent--
    }}

 
  
  increase.onclick = () => {
    count.textContent++
  }



  remove.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  card.innerHTML = `
    <img src="${image}" alt="">
    <div class="name">
      <a href="#">${name}</a>
      <p>${price} $</p>
    <hr>
    </div>
    `;
  remove.classList.add("remove");
  card.classList.add("basketCard");
  countDiv.classList.add('countDiv')
  countDiv.append(increase, count, decrease)
  card.append(remove, countDiv);
  basketDiv.append(card);

  remove.onclick = () => {
    productArrBasket = productArrBasket.filter((x) => x.id !== id);
    setLocalStorage("basket", productArrBasket);

    message.innerHTML = ''
    message.textContent = getLocalStorage("basket").length

    basketDiv.innerHTML = ""
    productArrBasket.forEach((items) => {
      createCardForBasketPage(items.id, items.image, items.name, items.price);
    });
  };
}

function addCardToBasketPage() {
  productArrBasket.forEach((items) => {
    createCardForBasketPage(items.id, items.image, items.name, items.price);
  });
}
addCardToBasketPage()
