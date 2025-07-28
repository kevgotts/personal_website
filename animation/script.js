document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const hero = document.querySelector(".hero");
    const more = document.querySelector(".show-more");

    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            hero.classList.add('hidden');
            more.classList.add('hidden');
            header.classList.add('show');
            main.classList.add('show');
            hero.classList.remove('show');
            more.classList.remove('show');
            header.classList.remove('hidden');
            main.classList.remove('hidden');
        } else {
            hero.classList.add('show');
            more.classList.add('show');
            header.classList.add('hidden');
            main.classList.add('hidden');
            hero.classList.remove('hidden');
            more.classList.remove('hidden');
            header.classList.remove('show');
            main.classList.remove('show');
        }
    });
});