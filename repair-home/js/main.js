
$(document).ready(function () {
    var heroSlider = $('#first_c');
    var show_animations = function(){
        var $this = this;
        // first removing animation for all captions
        $('.animation h1').removeClass('slideInLeft').addClass('hidden');
        $('.animation .buttons').removeClass('slideInLeft').addClass('hidden');
        $($this).find('.owl-item.active h1').addClass('slideInLeft').removeClass('hidden');
        setTimeout(function(){
            $($this).find('.owl-item.active .buttons').addClass('fadeInUp').removeClass('hidden');
        },200)

    };
    heroSlider.on("initialized.owl.carousel", show_animations);
    heroSlider.on("translated.owl.carousel", show_animations);
    heroSlider.owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        dotsSpeed: 1000
    });


    //language=JQuery-CSS
    var owl = $('#second_c');
    owl.owlCarousel({

        loop: true,
        lazyLoad: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        autoHeight: false,
        dotsSpeed: 1000,

        responsive: {
            0: {
                items: 1
            },
            772: {
                items: 2,
                slideBy: 2
            },
            1000: {
                items: 3,
                slideBy: 3
            }
        }
    });

    var owl = $('#third_c');
    owl.owlCarousel({

        loop: true,
        lazyLoad: true,
        margin: 0,
        autoplay: false,
        autoplayHoverPause: false,
        autoHeight: false,
        dotsSpeed: 1000,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2,
                slideBy: 2
            }

        }
    })

})
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass("fixed");
    }
    else {
        $('nav').removeClass("fixed");
    }
})


$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
})
