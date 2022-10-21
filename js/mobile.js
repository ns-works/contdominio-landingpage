const mobileMenu = document.querySelector('#menu-mobile');

const openButton = document.querySelector('#open-menu-mobile');
const closeButton = document.querySelector('#close-menu-mobile');

openButton.addEventListener('click', () => {
  mobileMenu.classList.replace('mobile-collapsed', 'mobile-expanded');
})

closeButton.addEventListener('click', () => {
  mobileMenu.classList.replace('mobile-expanded', 'mobile-collapsed');
})