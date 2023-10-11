document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu');
    const layout = document.querySelector('.layout');
    const overlay = document.querySelector('.overlay');
    const menuSVG = document.querySelector('.menu svg path');
    const menuItems = gsap.utils.toArray('ul li a');
    const contentTitle = document.querySelector('.content-title');
    const contentSubtitle = document.querySelector('.content-subtitle');

    let menuOpen = false;

    gsap.set(overlay, {
        scaleY: 0
    });

    gsap.set(menuItems, {
        yPercent: 100
    });

    const navTl = gsap.timeline({
        defaults: {
            ease: 'power4.inOut',
            duration: 1
        }
    });

    navTl
        .to(layout, {
            scale: 0.95,
        })
        .to(overlay, {
            scaleY: 1
        }, "-=0.5")
        .to(menuSVG, {
            fill: 'white'
        }, "<")
        .to(menuItems, {
            yPercent: 0,
            stagger: 0.1,
            duration: 2
        }, "-=1.5")
    navTl.pause();

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            navTl.play();
            menuOpen = true;
            contentTitle.classList.add('white-text');
            contentSubtitle.classList.add('white-text');
        } else {
            navTl.reverse();
            menuOpen = false;
            contentTitle.classList.remove('white-text');
            contentSubtitle.classList.remove('white-text');
        }
    });
});

const internalLinks = document.querySelectorAll('a[href^="/"]');

internalLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetPageURL = link.getAttribute('href');

        document.body.classList.add('page-transition');

        setTimeout(() => {
            window.location.href = targetPageURL;
        }, 1000);
    });
});