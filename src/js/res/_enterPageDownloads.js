import gsap from 'gsap';
import scrollUp from './_scrollUp';
import menuMobile from './_menuMobile';

const enterPageDownloads = (container) => {

    const headerImg = container.querySelector('.header-img');
    const title = container.querySelector('.downloads__title');
    const description = container.querySelector('.downloads__description');
    const downloadsLinks = container.querySelectorAll('.downloads__group-files');
    const footer = container.querySelector('.footer');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
        },
    });

    menuMobile();
    scrollUp();

    tl
        .to(container, {
            opacity: 1
        })
        .fromTo(headerImg, {
            opacity: 0,
            yPercent: -100
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(title, {
            opacity: 0,
            yPercent: -100
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(description, {
            opacity: 0,
            xPercent: -100
        }, {
            opacity: 1,
            xPercent: 0
        })
        .fromTo(downloadsLinks, {
            opacity: 0,
            yPercent: 50
        }, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.2
        })
        .fromTo(footer, {
            opacity: 0,
            yPercent: 100
        }, {
            opacity: 1,
            yPercent: 0
        });

    return tl;
};

export default enterPageDownloads;