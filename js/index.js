'use strict';

window.addEventListener('load', () => {
    {
        const swiper = new Swiper('.swiper', {
            // Navigation arrows
            loop: true,
            navigation: {
                nextEl: '.slider-arrow-prev',
                prevEl: '.slider-arrow-next',
            },
        });
    }
})