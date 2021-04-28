const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', function () {
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
})