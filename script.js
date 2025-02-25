// Function to load header and footer and execute a callback after loading
function loadComponent(file, elementId, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback(); 
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load header and footer when the page loads
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header.html", "header-container", function () {
        // Now that the header is loaded, we can add event listeners
        const menuToggle = document.getElementById("mobile-menu-toggle");
        const navigation = document.getElementById("site-navigation");

        if (!menuToggle || !navigation) {
            console.error("Menu toggle button or navigation not found!");
            return;
        }

        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("toggled");
            const isExpanded = navigation.classList.contains("toggled");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });
    });

    loadComponent("footer.html", "footer-container");
});

//hero banner carousel
$(window).on("load", function() {
    $(".hero-carousel").owlCarousel({
        items: 1, 
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ["<div class='custom-prev'></div>", "<div class='custom-next'></div>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
});
// About page review carousel
$(window).on("load", function() {
    $(".reviews-wrapper").owlCarousel({
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000, 
        autoplayHoverPause: true, 
        nav: false, 
        dots: false, 
        animateOut: 'fadeOut', 
        animateIn: 'fadeIn', 
        responsive: {
            0: {
                items: 1 
            },
            768: {
                items: 3 
            }
        }
    });
});
//contact page form submission
document.getElementById("contact-Form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Form submitted successfully!"); 
});
//contact page form submission
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Form submitted successfully!"); 
});