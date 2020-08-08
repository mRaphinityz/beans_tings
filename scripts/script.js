// Beans & Tings Mobile Menu Script
// WA2005 Project
// Name: Matthew Zolciak
// Date: 08/05/2020

const menuBtn = document.querySelector('.header-btn');
const mobileMenu = document.querySelector('.mobile-nav');
let menuShowing = false;


const handleClick = (e) => {
    if (!menuShowing) {
        mobileMenu.classList.add('open');
        menuShowing = true;
        menuBtn.style.transform = 'rotate(180deg)';
        
    } else {
        mobileMenu.classList.remove('open');
        menuShowing = false;
        menuBtn.style.transform = 'rotate(0)';
    }
}

menuBtn.addEventListener('click',  handleClick);