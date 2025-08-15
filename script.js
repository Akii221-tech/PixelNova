const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // menu open/close
  burger.classList.toggle('toggle');   // burger animation
});