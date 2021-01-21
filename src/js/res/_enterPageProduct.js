import gsap from 'gsap';
import slider from './_slider';
import scrollUp from './_scrollUp';
import modalOrder from './_modalOrder';
import menuMobile from './_menuMobile';

const enterPageProduct = (container) => {
    console.log('enter page: ', container);

    const loader = document.querySelectorAll('.loader__item');
    const title = container.querySelector('.prod__title');
    const breadcrumbs = container.querySelector('.breadcrumbs');
    const productLegend = container.querySelector('.prod__legend');
    const productItem = container.querySelector('.prod-slider__item');
    const productSliderArrows = container.querySelectorAll('.slider-btn__item');
    const productListItem = container.querySelector('.prod__list');
    const productDescription = container.querySelector('.prod__description');
    const orderLink = container.querySelector('.order__link');

    const modal = container.querySelector('.modal');
    const footer = container.querySelector('.footer');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            ease: 'power4.easeIn',
        },
    });

    menuMobile();
    slider(container);
    modalOrder();
    scrollUp();

    tl
        .fromTo(loader, {
            scale: 0,
            opacity: 0
        }, {
            duration: 1.5,
            scale: 1,
            opacity: 1
        })
        .to(container, {
            opacity: 1
        })
        .fromTo(productSliderArrows, {
            opacity: 0
        }, {
            opacity: 1
        })
        .fromTo(productItem, {
            opacity: 0,
            xPercent: -100
        }, {
            opacity: 1,
            xPercent: 0
        }, "-=0.25")
        .fromTo(breadcrumbs, {
            opacity: 0,
            yPercent: -100
        }, {
            opacity: 1,
            yPercent: 0
        }, "-=0.3")
        .fromTo(title, {
            opacity: 0,
            yPercent: -100
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(productLegend, {
            opacity: 0,
            yPercent: -100
        }, {
            opacity: 1,
            yPercent: 0
        })
        .fromTo(productListItem, {
            opacity: 0,
            xPercent: -100
        }, {
            opacity: 1,
            xPercent: 0
        })
        .fromTo(productDescription, {
            opacity: 0,
            xPercent: 100
        }, {
            opacity: 1,
            xPercent: 0
        })
        .fromTo(orderLink, {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1
        })
        .to(modal, {
            opacity: 0
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

export default enterPageProduct;