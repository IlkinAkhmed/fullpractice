// side navbar accordion
const names = document.querySelectorAll('.acc-li')
const firstdrops = document.querySelectorAll('.acc-inside-ul')
const secondname = document.querySelectorAll('.acc-li-inside')
const seconddrop = document.querySelectorAll('.acc-li-inside-ul')
const menubar = document.querySelector(".fa-bars")
const cancelnav = document.querySelector(".fa-xmark")
const sidenav = document.querySelector(".resp-nav")


for (let i = 0; i < names.length; i++) {
    names[i].addEventListener("click",(e)=>{
        e.preventDefault()
        names.forEach(x=>x !== names[i] ? x.querySelector("ul").classList.remove('active')  :null)
        firstdrops[i].classList.toggle('active')

    })
    
}


for (let i = 0; i < secondname.length; i++) {
    secondname[i].addEventListener("click",(e)=>{
        e.stopPropagation()
        e.preventDefault()
        secondname.forEach(x =>x !== seconddrop[i] ? x.querySelector('ul').classList.remove('active') :null)
        seconddrop[i].classList.toggle('active')
    })
    
}



menubar.onclick=()=>{
    sidenav.style.transform='translateX(0)';
    sidenav.style.transition = '0.4s'
    
}

cancelnav.onclick=()=>{
    sidenav.style.transform='translateX(-300px)';
    sidenav.style.transition = '0.4s'
    
}

