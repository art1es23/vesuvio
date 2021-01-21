import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from "gsap";
import {
    enterPageHome,
    enterPageAbout,
    enterPageProductGallery,
    enterPageProduct,
    enterPageShop,
    enterPageDownloads,
    enterPageBlog
} from "./res";

let lastClicked;

barba.hooks.afterLeave(data => {
    lastClicked = data.trigger;
});
barba.hooks.enter(data => {
    window.scrollTo(0, 0);
    let target = data.next.container;
});

barba.hooks.once(data => {
    window.scrollTo(0, 0);
    let target = data.next.container;
});

/*
barba.use(barbaCss);
*/

barba.init({

    transitions: [
        // {
        //     name: 'default',
        //     enter(data) {
        //         menuMobile();
        //     },
        //     leave: ({
        //         current
        //     }) => {
        //         return gsap.to(current.container, {
        //             opacity: 0,
        //             duration: 0.5
        //         });
        //     },
        // },

        {
            name: 'enterPageHome',
            to: {
                namespace: ['home']
            },
            once({
                next
            }) {
                enterPageHome(next.container);
            },
            enter({
                next
            }) {
                enterPageHome(next.container);
            },
        },

        {
            name: 'enterPageProducts',
            to: {
                namespace: ['prod']
            },
            once({
                next
            }) {
                enterPageProduct(next.container);
            },
            enter({
                next
            }) {
                enterPageProduct(next.container);
            },
            leave({
                current
            }) {
                return gsap.to(document.querySelector('.loader__item'), {
                    scale: 0,
                    opacity: 0
                });
            }
        },

        {
            name: 'enterPageAbout',
            to: {
                namespace: ['about'],
            },
            once({
                next
            }) {
                enterPageAbout(next.container);
            },
            enter({
                next
            }) {
                enterPageAbout(next.container);
            }
        },

        {
            name: 'enterPageProductsGallery',
            to: {
                namespace: ['products'],
            },
            once({
                next
            }) {
                enterPageProductGallery(next.container);
            },
            enter({
                next
            }) {
                enterPageProductGallery(next.container);
            }
        },

        {
            name: 'enterPageProductsBlog',
            to: {
                namespace: ['blog'],
            },
            once({
                next
            }) {
                enterPageBlog(next.container);
            },
            enter({
                next
            }) {
                enterPageBlog(next.container);
            }
        },

        {
            name: 'enterPageProductsShop',
            to: {
                namespace: ['shop', 'contacts'],
            },
            once({
                next
            }) {
                enterPageShop(next.container);
            },
            enter({
                next
            }) {
                enterPageShop(next.container);
            }
        },

        {
            name: 'enterPageProductsDownloads',
            to: {
                namespace: ['downloads'],
            },
            once({
                next
            }) {
                enterPageDownloads(next.container);
            },
            enter({
                next
            }) {
                enterPageDownloads(next.container);
            }
        },
    ],

});