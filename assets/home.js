const btnleft = document.querySelector(".fa-angle-left")
const btnright = document.querySelector(".fa-angle-right")
const image = document.querySelector(".image") 
btnleft.onclick=()=>{
    if (image.src==='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png') {
        image.src = 'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png'
        image.style.transition = '0.5s'
    }else{
        image.src='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'
        image.style.transition = '0.5s'
    }
  
}
btnright.onclick=()=>{
    if (image.src === 'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png') {
        
        image.src = 'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'
        image.style.transition = '0.5s'
    }else{
        image.src = 'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png'
        image.style.transition = '0.5s'
    }
}




// search Modal

const searchbtn = document.querySelector(".fa-magnifying-glass")
const closemodal = document.querySelector("#modal .fa-xmark")
const input = document.querySelector("#input")
const modal = document.querySelector("#modal")

searchbtn.onclick=()=>{
    modal.style.display = 'flex'
}
closemodal.onclick=()=>{
    modal.style.display = 'none'
}
input.addEventListener('focus',(e)=>{
    e.preventDefault()
    input.style.border = 'none'
})