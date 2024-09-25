function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburgerIcon = document.querySelector('.hamburger');

    mobileNav.classList.toggle('active');

    // Detectar clic fuera del menú para cerrarlo
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileNav.contains(event.target);
        const isClickOnHamburger = hamburgerIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }
    });
}
