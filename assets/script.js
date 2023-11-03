// side navbar accordion
const accordionli = document.querySelectorAll('.acc-li')
const accordionInsideUl = document.querySelectorAll('.acc-inside-ul')
const menubar = document.querySelector(".fa-bars")
const cancelnav = document.querySelector(".fa-xmark")
const sidenav = document.querySelector(".resp-nav")
accordionli.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(btn.nextElementSibling);
        if (btn.nextElementSibling.style.display === 'block') {
            btn.nextElementSibling.style.display = 'none'
        } else { btn.nextElementSibling.style.display = 'block' }
    })
});
menubar.onclick=()=>{
    sidenav.style.transform='translateX(0)';
    sidenav.style.transition = '0.4s'
    
}
cancelnav.onclick=()=>{
    sidenav.style.transform='translateX(-300px)';
    sidenav.style.transition = '0.4s'
    
}
