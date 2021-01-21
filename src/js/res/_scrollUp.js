import gsap from 'gsap';

const scrollUp = () => {

    const anchors = document.querySelector('.scroll-up__link');

    anchors.addEventListener('click', function (e) {
        e.preventDefault();


        /*
                const blockID = anchors.getAttribute('href').substr(1)
        */

        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

};

export default scrollUp;