!function () {

    var view = document.querySelector('#mySlides');
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function (view) {
            this.view = view;
            this.initSwiper();
        },
        initSwiper: function () {
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            );
        }
    }

    controller.init.call(controller, view);

}.call()