/* ============== VARIABLES ======== */
const button = document.querySelector('.main__left_button'),
    popup = document.querySelector('.popup'),
    close = document.querySelector('.form__close'),
    phone = document.querySelector('.header__phone'),
    hamburger = document.querySelector('.header__hamburger'),
    closeHamburger = document.querySelector('.header_hamburger_close'),
    headerContent = document.querySelector('.header__hamburger_content')

const screenWidth = window.screen.width
console.log(screenWidth)

/* ============== EVENTS ============== */
button.addEventListener('click', () => {
    popup.style.display = 'block'
})
close.addEventListener('click', () => {
    popup.style.display = 'none'
})
phone.addEventListener('click', () => {
    popup.style.display = 'block'
})
closeHamburger.addEventListener('click', () => {
    headerContent.style.display = 'none'
})
hamburger.addEventListener('click', () => {
    headerContent.style.display = 'block'
})

if (screenWidth >= 1440 && screenWidth <= 1920) headerContent.style.display = 'none'
if (screenWidth >= 1024 && screenWidth <= 1440) headerContent.style.display = 'none'
if (screenWidth >= 768 && screenWidth <= 1024) headerContent.style.display = 'none'
if (screenWidth >= 320 && screenWidth <= 768) headerContent.style.display = 'none'
