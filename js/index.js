document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('.navUl');

    menuBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navUl.classList.remove('show');
        }
    });
});
