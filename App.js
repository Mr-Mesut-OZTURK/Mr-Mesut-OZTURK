const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");


// Display Mobile Menu
menu.addEventListener("click", () => {
    menuLinks.classList.toggle("active")
    menu.classList.toggle("is-active")
})


// menu item add class
/* const navLogo = document.querySelectorAll(".navbar__links");
// console.log(navLogo[0])
navLogo.forEach(e => {
    // console.log(e)
    e.addEventListener("click", () => {
        navLogo.forEach(e => {
            e.classList.remove("highlight")
        })
        e.classList.add("highlight")
    })
}) */


// menu item add class
const highLightMenu = () => {
    const elem = document.querySelector(".highlight")
    const homeMenu = document.querySelector("#home-page")
    const aboutMenu = document.querySelector("#about-page")
    const serviceMenu = document.querySelector("#services-page")
    let scrollPos = window.scrollY

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight")
        homeMenu.classList.remove("highlight")
        serviceMenu.classList.remove("highlight")
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        serviceMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos <600) || elem) {
        elem.classList.remove("highlight")
    }
}
window.addEventListener("scroll", highLightMenu)
window.addEventListener("click", highLightMenu)



// hide menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active")

    if (window.innerWidth <= 786 && menuBars) {
        menu.classList.toggle("is-active")
        menuLinks.classList.remove("active")
    }
}
menuLinks.addEventListener("click", hideMobileMenu)
navLogo.addEventListener("click", hideMobileMenu)


// getComputedStyle(document.documentElement).getPropertyValue('--dark');
// document.documentElement.style.setProperty('--dark', 'pink');

// var r = document.querySelector(':root');
// var rs = getComputedStyle(r);
// r.style.setProperty('--dark', 'lightblue');



// chose theme color
const r = document.querySelector(':root');
const colors = ["#131313", "#24FE41", "#6E48AA", "#8CA6DB"]

const changeColor = () => {
    r.style.setProperty('--dark', colors[Math.floor(Math.random() * colors.length)]);
}
navLogo.addEventListener("click", changeColor)