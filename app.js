
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

const navToggler = document.querySelector('.navbar__toggler');
const navTogglerBurger = document.querySelector('.navbar__toggler-burger');
const navBar = document.querySelector('.navbar__menu');


navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('open');
    navTogglerBurger.classList.toggle('open');
    navBar.classList.toggle('open');
    

});

