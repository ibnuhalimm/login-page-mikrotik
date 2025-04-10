const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        // disabledOnInteraction: false,
        stopOnLastSlide: false,
        // pauseOnMouseEnter: true
    },
    speed: 1000,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500]
        },
        next: {
            shadow: true,
            translate: ['120%', 0, -500]
        }
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});
