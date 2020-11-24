(function($) {
    "use strict";
    jQuery(document).on('ready', function() {
        feather.replace();
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });
            return false;
        });
        $('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.startp-nav').addClass("is-sticky");
            } else {
                $('.startp-nav').removeClass("is-sticky");
            }
        });
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        if (typeof(frontend_ajax_object) != "undefined" && frontend_ajax_object !== null) {
            var team_slide = frontend_ajax_object.team_slide;
            var work_slide = frontend_ajax_object.work_slide;
        } else {
            var work_slide = 4;
            var team_slide = 5;
        }
        console.log(work_slide);
        var owl = $('.works-slides');
        owl.owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1500: {
                    items: work_slide,
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        var owl = $('.boxes-slides');
        owl.owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 4,
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
                1500: {
                    items: team_slide,
                }
            }
        });
        var $imagesSlider = $(".feedback-slides .client-feedback>div"),
            $thumbnailsSlider = $(".client-thumbnails>div");
        $imagesSlider.slick({
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            asNavFor: ".client-thumbnails>div",
            prevArrow: '.client-feedback .prev-arrow',
            nextArrow: '.client-feedback .next-arrow'
        });
        $thumbnailsSlider.slick({
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            asNavFor: ".feedback-slides .client-feedback>div",
            prevArrow: '.client-thumbnails .prev-arrow',
            nextArrow: '.client-thumbnails .next-arrow',
        });
        var $caption = $('.feedback-slides .caption');
        var captionText = $('.client-feedback .slick-current img').attr('alt');
        updateCaption(captionText);
        $imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $caption.addClass('hide');
        });
        $imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            captionText = $('.client-feedback .slick-current img').attr('alt');
            updateCaption(captionText);
        });

        function updateCaption(text) {
            if (text === '') {
                text = '&nbsp;';
            }
            $caption.html(text);
            $caption.removeClass('hide');
        }
        $(function() {
            $(window).on('scroll', function() {
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });
            $('.go-top').on('click', function() {
                $("html, body").animate({
                    scrollTop: "0"
                }, 500);
            });
        });
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function() {
                $(this).toggleClass('active');
                $(this).next().slideToggle('fast');
                $('.accordion-content').not($(this).next()).slideUp('fast');
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });
        jQuery('.grid').masonry({
            itemSelector: '.grid-item'
        });
    });
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });
    jQuery(document).on('ready', function() {
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    });
}(jQuery));