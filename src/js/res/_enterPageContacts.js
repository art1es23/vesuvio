import gsap from 'gsap';
import scrollUp from './_scrollUp';
import menuMobile from './_menuMobile';

const enterPageProduct = (container) => {

    const headerImg = container.querySelector('.header-img');
    const contactsImg = container.querySelector('.contacts__img');
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
        .fromTo(contactsImg, {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1
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