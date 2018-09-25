
// 1. GET ELEMENTS
var openButton = document.querySelector('#open-button')
var closeButton = document.querySelector('#close-button')
var mobileMenu = document.querySelector('#mobile-menu')


// 2. DEFINE ACTIONS
function open() {
    mobileMenu.className = 'mobile-menu'
}

function close() {
    mobileMenu.className = 'mobile-menu closed'
}


// 3. WIRE IT UP
openButton.addEventListener('click', open)
closeButton.addEventListener('click', close)