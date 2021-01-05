$(function () {

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

         // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: 3000
    });

    console.log(mySwiper)


    var v = document.getElementsByTagName("iframe")[0];

    v.addEventListener("canplay", function () {
        mySwiper.stopAutoplay();
    }, true);

    v.addEventListener("ended", function () {
        mySwiper.startAutoplay();
    }, true);

});