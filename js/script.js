window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav-list'),
    menuItem = document.querySelectorAll('.header__nav-item'),
    hamburger = document.querySelector('.ham');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
})