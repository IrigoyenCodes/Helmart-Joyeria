// Load navbar into all pages
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert navbar at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Add padding-top to body to account for fixed navbar
            document.body.style.paddingTop = '80px';
            
            // Add mobile menu functionality
            addMobileMenu();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});

// Add mobile menu functionality
function addMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    
    // Insert button before nav menu
    navMenu.parentNode.insertBefore(mobileMenuBtn, navMenu);
    
    // Add click event
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}
