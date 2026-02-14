const nextBtn = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];

let index = 0;

nextBtn.addEventListener('click', function(){
    index++;
    video.src = movieList[index]; 

    if(index === 3){
        index =-1;
    }
})

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainHeader = document.getElementById('mainHeader');
    const headRight = document.querySelector('.head-right');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainHeader.classList.toggle('mobile-open');
            headRight.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (headRight.classList.contains('active')) {
                icon.className = 'bx bx-x';
            } else {
                icon.className = 'bx bx-menu';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.head-right a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 480) {
                mainHeader.classList.remove('mobile-open');
                headRight.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'bx bx-menu';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            mainHeader.classList.remove('mobile-open');
            headRight.classList.remove('active');
            if (mobileMenuToggle) {
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'bx bx-menu';
            }
        }
    });
});

// Smooth scroll for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-based header styling (optional enhancement)
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '8px 40px';
    } else {
        header.style.padding = '10px 40px';
    }
    
    lastScroll = currentScroll;
});
