(function ($) {

    'use strict';

    /*------------------------------------
        Mobile Menu
    --------------------------------------*/

    $('#mobile-menu-active').metisMenu();

    $('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
        e.preventDefault();
    });

    $(".sidebar-toggle-btn").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").toggleClass("show");
        $("body").addClass("on-side");
        $('.body-overlay').addClass('active');
        $(this).addClass('active');
    });

    $(".close-mobile-menu > a").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").removeClass("show");
        $("body").removeClass("on-side");
        $('.body-overlay').removeClass('active');
        $('.sidebar-toggle-btn').removeClass('active');
    });

    $('.body-overlay').on('click', function () {
        $(this).removeClass('active');
        $(".slide-bar").removeClass("show");
        $("body").removeClass("on-side");
        $('.sidebar-toggle-btn').removeClass('active');
    });

    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    /*------------------------------------
        Overlay Close
    --------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $('#scrollUp').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

    $('.price-item').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().find('.price-item').removeClass('active');
    });

    $('.view-password').on('click', function () {
        let input = $(this).parent().find(".pass");
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });

    // Slider With Thumbs
    if (jQuery(".testimonial-active .swiper-container").length > 0) {
        let testimonialSlider = new Swiper('.testimonial-active .swiper-container', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 4,
            slidesPerColumn: 1,
            paginationClickable: true,
            rtl: true,

            autoplay: {
                delay: 5000,
            },

            // If we need pagination
            pagination: {
                el: '.testimonial-swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.testimonial-swiper-prev',
                prevEl: '.testimonial-swiper-next',
            },

            a11y: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }

    if (jQuery(".testimonial-active-2 .swiper-container").length > 0) {
        let testimonialSlider = new Swiper('.testimonial-active-2 .swiper-container', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 5,
            slidesPerColumn: 1,
            paginationClickable: true,
            centeredSlides: true,
            rtl: true,
            autoplay: {
                delay: 5000,
            },

            // If we need pagination
            pagination: {
                el: '.testimonial-2-swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.testimonial-2-swiper-prev',
                prevEl: '.testimonial-2-swiper-next',
            },

            a11y: false,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
        });
    }


    // niceSelect
    if (jQuery(".nice-select").length > 0) {
        $('.nice-select').niceSelect();
    }


    // datepicker
    if (jQuery("#datepicker").length > 0) {
        $('#datepicker').datepicker({
            format: 'mm-dd-yyyy'
        });
    }


    // count down
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="time-count">%D <span>DAYS</span></div><div class="time-count">%H <span>HRS</span></div><div class="time-count">%M <span>MINS</span></div><div class="time-count">%S <span>SEC</span></div>'));
        });
    });

    if ($(".parallax-img").length) {
        let stuff = $('.parallax-img').get(0);
        let parallaxInstance = new Parallax(stuff);
    }
    if ($(".parallax-shape-1").length) {
        let stuff = $('.parallax-shape-1').get(0);
        let parallaxInstance = new Parallax(stuff);
    }
    if ($(".parallax-shape-2").length) {
        let stuff = $('.parallax-shape-2').get(0);
        let parallaxInstance = new Parallax(stuff);
    }
    if ($(".parallax-shape-3").length) {
        let stuff = $('.parallax-shape-3').get(0);
        let parallaxInstance = new Parallax(stuff);
    }
    if ($(".parallax-shape-4").length) {
        let stuff = $('.parallax-shape-4').get(0);
        let parallaxInstance = new Parallax(stuff);
    }
    if ($(".parallax-shape-5").length) {
        let stuff = $('.parallax-shape-5').get(0);
        let parallaxInstance = new Parallax(stuff);
    }

    new WOW().init();
})(jQuery);
