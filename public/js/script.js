// loading screen
function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}
  
  
function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('#main-wrapper', true);
    setVisible('#loading', false);
});



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

// pagenation

const slides = document.querySelectorAll('div.circle');
const pages = document.querySelectorAll('.page');

// tracker
let current = 0;

function changeSlide(dot) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dot.classList.add('active');
}

slides.forEach((slide, index) => {
    slide.addEventListener('click',function() {
        changeSlide(this);
        nextSlide(index);
    });
});

function nextSlide(pageIndex) {
    const nextIndex =  pages[pageIndex];
    const currentIndex = pages[current];
    const nextLeft = nextIndex.querySelector('.center-page-left');
    const nextRight = nextIndex.querySelector('.center-page-right');
    const currentLeft = currentIndex.querySelector('.center-page-left');
    const currentRight = currentIndex.querySelector('.center-page-right');
    const nextText = nextIndex.querySelector('.project-detail');
    const body = document.querySelector('#main-wrapper');
}
