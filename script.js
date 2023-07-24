const menuIcon = document.querySelector('.menu-icon');
const hamburgerMenu = document.getElementById('hamburgerMenu');

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  hamburgerMenu.classList.toggle('active');
} 
