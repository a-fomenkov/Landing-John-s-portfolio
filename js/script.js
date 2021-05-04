const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');

iconMenu.addEventListener('click', function () {
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
	body.classList.toggle('lock');
})