// MOBILE MENU

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu) {

    mobileMenu.addEventListener('click', function () {

        navMenu.classList.toggle('active');

    });

}

// CLOSE MENU AFTER CLICK

document.querySelectorAll('#nav-menu a').forEach(link => {

    link.addEventListener('click', function () {

        navMenu.classList.remove('active');

    });

});

// CONTACT FORM

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

// MINIMUM DATE = TODAY

const dateInput = document.getElementById('date');

if (dateInput) {

    const today = new Date().toISOString().split('T')[0];

    dateInput.min = today;

}