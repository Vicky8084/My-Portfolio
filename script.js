// --- Mobile Navigation Menu Logic ---
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Toggle mobile menu visibility when the open button is clicked
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked (simulates a click on the open button to reverse the toggle)
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when a navigation link is clicked (simulates a click on the open button to reverse the toggle)
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// --- Contact Form Pop-up Success Message Logic ---
// Get the form and the pop-up elements
const contactForm = document.querySelector('.contact-section .contact-form');
const submitButton = contactForm.querySelector('.submit-button');
const successPopup = document.getElementById('success-popup');
const closeButton = successPopup.querySelector('.close-button');
const okButton = document.getElementById('ok-button'); // Get the new OK button

// Function to show the pop-up by adding the 'show' class
function showPopup() {
    successPopup.classList.add('show');
}

// Function to hide the pop-up by removing the 'show' class
function hidePopup() {
    successPopup.classList.remove('show');
}

// Event listener for the form's submit button
submitButton.addEventListener('click', (event) => {
    // Prevent the default form submission, which would reload the page
    event.preventDefault();

    // In a real application, you would send form data to a server here using fetch() or XMLHttpRequest.
    // For this frontend-only example, we'll just simulate a successful submission.

    // Clear all form fields after "sending" the message
    contactForm.reset();

    // Show the success pop-up to the user
    showPopup();
});

// Event listener for the close button inside the pop-up
closeButton.addEventListener('click', hidePopup);

// Event listener for the new OK button
okButton.addEventListener('click', hidePopup); // Clicking OK also hides the pop-up

// Event listener to close the pop-up when clicking anywhere on the dark overlay (outside the content)
successPopup.addEventListener('click', (event) => {
    // Check if the click event originated directly on the successPopup element itself (the overlay)
    if (event.target === successPopup) {
        hidePopup();
    }
});

// --- Swiper.js Initialization for Projects Section ---
const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true, // Enables continuous loop mode
    grabCursor: true, // Changes cursor to indicate grab functionality

    // Distance between slides in px
    spaceBetween: 25,

    // If we need pagination (dots at the bottom)
    pagination: {
        el: '.swiper-pagination', // Element for pagination
        clickable: true, // Makes pagination dots clickable
        dynamicBullets: true, // Adds a visual effect to active bullets
    },

    // Navigation arrows (Previous/Next buttons)
    navigation: {
        nextEl: '.swiper-button-next', // Element for next button
        prevEl: '.swiper-button-prev', // Element for previous button
    },

    // Responsive breakpoints for number of slides per view
    breakpoints: {
        // When window width is >= 0px
        0: {
            slidesPerView: 1
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 2
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});