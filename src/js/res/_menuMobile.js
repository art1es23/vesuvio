const menuMobile = () => {

    const header = document.querySelector('.header');
    const nav = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menu');
    const anchorLinks = nav.querySelectorAll('.navigation__link');


    menuToggle.addEventListener('click', (evt) => {
        evt.preventDefault();
        header.classList.toggle('header--direction');
        menuToggle.classList.toggle('menu--toggle');
        nav.classList.toggle('navigation--active');
        /*
                document.body.classList.toggle('scroll--hidden')
        */
        /* Activate Submenu */
    });

    anchorLinks.forEach(link =>
        link.addEventListener('click', (e) => {
            e.preventDefault();
            header.classList.remove('header--direction');
            menuToggle.classList.remove('menu--toggle');
            nav.classList.remove('navigation--active');
            /*            document.body.classList.remove('scroll--hidden')*/
        })
    );

    window.addEventListener('scroll', e => {
        let scroll = window.pageYOffset;
        let headerHeight = header.clientHeight;

        if (scroll >= headerHeight) {
            header.classList.add('header--color');
        } else {
            header.classList.remove('header--color');
        }

    });


};

export default menuMobile;