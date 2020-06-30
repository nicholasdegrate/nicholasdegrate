// loading screen
function onReady(callback) {
    /*
        * Setting a setInterval on the on window to 1s 
    */
       let intervalId = window.setInterval(function() {
        // ! check if body[0] element is not undefined then continue with statement

           if (document.getElementsByTagName('body')[0] !== undefined) {
            // * clearing the time of window variable
            window.clearInterval(intervalId);
            // * callback.call() write a method to be used on a different object
            callback.call(this);
        }
    }, 2000);
}
  
/* 
    setVisisble: 
    is identifying the current querySelector and checking if the statement is true or false
*/
function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

// setting the main page and loading page before it
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




// pagination
function init() {
    
    const slides = document.querySelectorAll('div.circle');
    const pages = document.querySelectorAll('.page');
    const backgrounds = [
        `#A0A09F`,
        `#1E1E1E`,
        ` rgb(54, 54, 54)`,
    ];
    
        
    // tracker
    let current = 0;
    let scrollSlide = 0;
    
    // scrolling effect
    document.addEventListener('touchmove', throttle(scrollchange, 500));
    document.addEventListener('wheel', throttle(scrollchange, 500));
    
    function scrollchange(e) {
        if (e.deltaY > 0) {
            scrollSlide += 1;
        } else {
            scrollSlide -= 1;
        }
        
        if (scrollSlide > 2) {
            scrollSlide = 0;
        }
        if (scrollSlide < 0) {
            scrollSlide = 2;
        }
        switchDots(scrollSlide);
        nextSlide(scrollSlide);
    }
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }
    
    function switchDots(dotNumber) {
        const activeDot = document.querySelectorAll('.circle')[dotNumber];
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        activeDot.classList.add('active');
    }
    // ! end of scrolling effect

    function changeSlide(dot) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add('active');
    }
    
    slides.forEach((slide, index) => {
        slide.addEventListener('click',function() {
            if (!this.classList.contain('active')) {
                changeSlide(this);
                nextSlide(index);
                scrollSlide = index;
            }
        });
    });
    
    
    
    function nextSlide(pageIndex) {
        const nextIndex =  pages[pageIndex];
        const currentIndex = pages[current];
        const nextLeft = nextIndex.querySelector('.center-page-left .model-left');
        const nextRight = nextIndex.querySelector('.center-page-right .model-right');
        const currentLeft = currentIndex.querySelector('.center-page-left .model-left');
        const currentRight = currentIndex.querySelector('.center-page-right .model-right');
        const nextText = nextIndex.querySelector('.project-detail');
        const body = document.querySelector('#main-wrapper');
    
        let tl = gsap.timeline();

        tl.fromTo(currentLeft, 0.3, {y: '-10%'}, {y: '-100%'})
          .fromTo(currentRight, 0.3, {y: '10%'}, {y: '-100%'}, '-=0.2')
          .to(body, 0.3, {backgroundColor: backgrounds[pageIndex]})
          .fromTo(currentIndex, 0.3, {opacity: 1, pointerEvents: 'all'}, {opacity: 0, pointerEvents: 'none'})
          .fromTo(nextIndex, 0.3, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'}, '-=0.6')
          .fromTo(nextLeft, 0.3, {y: '-100%'}, {y:'-10%'}, '-=0.6')
          .fromTo(nextRight, 0.3, {y: '-100%'}, {y:'10%'}, '-=0.8');

        current = pageIndex;
    }
}

init();