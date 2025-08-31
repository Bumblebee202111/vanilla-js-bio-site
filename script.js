const themeToggleButton = document.querySelector('#theme-toggle');
const bodyElement = document.querySelector('body');

themeToggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
})