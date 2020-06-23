// navbar 
const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('.mobile-nav-popup');
const closeNav = document.querySelector('.close-btn');

hamburger.addEventListener('click', () =>{
    mobileNav.style.display = 'block';
});

closeNav.addEventListener('click', () =>{
    mobileNav.style.display = 'none';
});