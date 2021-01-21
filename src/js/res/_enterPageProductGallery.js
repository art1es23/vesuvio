import gsap from 'gsap';
import slider from './_slider';
import scrollUp from './_scrollUp';
import menuMobile from './_menuMobile';

const enterPageProductGallery = (container) => {

    const headerImg = container.querySelector('.header-img');
    const mainTitle = container.querySelector('.title');
    const sliderProduct = container.querySelector('.slider');
    const slideShopItems = container.querySelectorAll('.slide-shop__item');
    const slideShopDots = container.querySelectorAll('.slider-dots--wrapper');
    const footer = container.querySelector('.footer');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
        },
    });

    menuMobile();
    slider(container);
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
        .fromTo(mainTitle, {
            opacity: 0,
            yPercent: -100
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(sliderProduct, {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1
        })
        .fromTo(slideShopItems, 0.1, {
            opacity: 0,
            yPercent: 5
        }, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.2
        })
        .fromTo(slideShopDots, 0.1, {
            opacity: 0,
            yPercent: 5
        }, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.2
        }, "-=3.5")
        .fromTo(footer, {
            opacity: 0,
            yPercent: 100
        }, {
            opacity: 1,
            yPercent: 0
        }, "-=3.5");
    return tl;
};

export default enterPageProductGallery;