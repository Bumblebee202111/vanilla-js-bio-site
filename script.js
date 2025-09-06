const themeToggleButton = document.querySelector('#theme-toggle');
const bodyElement = document.querySelector('body');

themeToggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
})

const contactForm = document.querySelector('#contact-form');
const thankYouMessage = document.querySelector('#thank-you-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        contactForm.style.display = 'none';

        thankYouMessage.classList.remove('hidden');
    })
}