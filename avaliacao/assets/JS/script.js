let lastScrollTop = 0; 
let header = document.querySelector('header'); 

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        
        header.style.top = "-4.5rem";  
    } else {
    
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
