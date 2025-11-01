document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    const navLinks = document.querySelectorAll('#nav-links a.nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();

        if ((currentPath === '' || currentPath === 'index.html') && (linkPath === '' || linkPath === 'index.html')) {
            link.classList.add('active');
        } else if (linkPath !== 'index.html' && currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});
