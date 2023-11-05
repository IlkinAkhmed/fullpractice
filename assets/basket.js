
// open and close basket window
const openbasket = document.querySelector(".fa-bag-shopping")
const basket = document.querySelector("#basket")
const closebasket = document.querySelector(".close")
openbasket.onclick = () => {
    basket.style.transform = "translateX(0)"
    basket.style.transition = '0.4s'
}
closebasket.onclick = () => {
    basket.style.transform = "translateX(400px)"
    basket.style.transition = '0.4s'
}


// getting api for products
const cards = document.querySelectorAll(".cards")
const url = 'http://localhost:3000/Products'

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}


const productArr = []

function createCard(id, image, name, price) {

    const box = document.createElement("div")
    const add = document.createElement('button')
    add.textContent = "Add To Basket"


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
            </div>
    `

    add.onclick = () => {
        productArr.push({
            id,
            image,
            name,
            price,

        });
        localStorage.setItem('basket', JSON.stringify(productArr))
    }

    box.append(add)
    box.classList.add('box')
    cards[0].append(box)
}

async function getData() {
    const res = await axios(url)
    data = res.data
    data.forEach(items => {
        createCard(items.id, items.image, items.name, items.price)
    });

}
getData()


// getting api for new products
const url2 = 'http://localhost:3000/newProducts'
const newProductArr = []

function createCardForNewProducts(newId, newImage, newname, newPrice) {

    const newbox = document.createElement("div")
    const add = document.createElement('button')
    add.textContent = 'Add To Basket'


    newbox.innerHTML = `
            <img src="${newImage}" alt="">
            <div class="name">
              <h3>${newname}</h3>
              <p>${newPrice}$</p>
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
            </div>
    `

    add.onclick = () => {
        newProductArr.push({
            newId,
            newImage,
            newname,
            newPrice
        })
        setLocalStorage('New Product', newProductArr)
    }

    newbox.classList.add('box')
    newbox.append(add)
    cards[1].append(newbox)
}

async function getNewProduct() {
    const res = await axios(url2)
    data = res.data
    data.forEach(items => {
        createCardForNewProducts(items.id, items.image, items.name, items.price)
    });
}
getNewProduct()





// basket page

const productArr2 = getLocalStorage('basket')
const newProductArr2 = getLocalStorage('New Product')

const basketDiv = document.querySelector(".basket-inside")

function createCardForBasketPage(id, image, name, price) {

    const card = document.createElement("div")
    const remove = document.createElement("a")
    remove.innerHTML=`<i class="fa-solid fa-trash"></i>`

    card.innerHTML = `
    <img src=${image} alt="">
    <div class="name">
      <a href="#">${name}</a>
      <p>${price} $</p>
    <hr>
    </div>
    `
    remove.classList.add("remove")
    card.classList.add("basketCard")
    card.append(remove)
    basketDiv.append(card)
}
productArr2.forEach(items => {
    createCardForBasketPage(items.id, items.image, items.name, items.price)
});

newProductArr2.forEach(items => {
    createCardForBasketPage(items.newId, items.newImage, items.newname, items.newPrice)
});





