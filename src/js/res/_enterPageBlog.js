import gsap from 'gsap';
import scrollUp from './_scrollUp';
import sliderHome from './_sliderHome';
import menuMobile from './_menuMobile';

const enterPageBlog = (container) => {

    const headerImg = container.querySelector('.header-img');
    const slider = container.querySelector('.slider');
    const slideShopDots = container.querySelectorAll('.slider-dots--wrapper');
    const categoryTitle = container.querySelectorAll('.category__title');
    const category = container.querySelectorAll('.blog-group');
    const categoryItems = container.querySelectorAll('.blog-group__item');
    const footer = container.querySelector('.footer');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
        },
    });

    menuMobile();
    sliderHome(container);
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
        .fromTo(slider, {
            opacity: 0,
            xPercent: -100
        }, {
            opacity: 1,
            xPercent: 0
        })
        .fromTo(categoryTitle, {
            opacity: 0,
            yPercent: -25
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(category, {
            opacity: 0,
            xPercent: -100
        }, {
            opacity: 1,
            xPercent: 0
        })
        .fromTo(categoryItems, {
            opacity: 0,
            yPercent: -5
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

export default enterPageBlog;