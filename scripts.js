document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    function changeActiveSection() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        links.forEach((link) => link.classList.remove('active'));
        links[index].classList.add('active');
    }

    changeActiveSection();
    window.addEventListener('scroll', changeActiveSection);
});
