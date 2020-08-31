$(document).ready(function ($) {
    
    //Home page viewport background slider codes Start
    // var mySwiper = new Swiper('.swiper-container.viewport-slide', {
    //     direction: 'vertical',
    //     loop: true,
    //     autoplay: true,
    //     speed: 1500,
    //     effect: 'cube',
    //     cubeEffect: {
    //         shadow: true,
    //         slideShadows: true,
    //         shadowOffset: 20,
    //         shadowScale: 0.94,
    //     },
    // });
    //Home page viewport background slider codes End

    // Project background slider codes Start
    var myProjectSwiper = new Swiper('.swiper-container.project-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed: 1500,
        effect: 'fade',

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    var myAboutSwiper = new Swiper('.swiper-con.about-slider', {
        // Optional parameters
        direction: 'horizontal',
        // direction: 'vertical',
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
        autoplay: false,
        speed: 1500,
    });
    // Project background slider codes End
    
    
    
    // Home page header sticky code Start
    var hdr_menu = $('#Home-header');
    if (hdr_menu.length) {
        var hdr_menu_offset = hdr_menu.offset().top;
    }
    
    $(window).scroll(function () {
        
        var scroll_mouse = $(window).scrollTop();
        
        if ($(window).width() > 767) {
            
            if (scroll_mouse > hdr_menu_offset) {
                $('#About').css({
                    "margin-top": "20vh",
                });
                $('#Home-header').css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "height": "auto",
                    "max-height": "20vh",
                    "padding": "15px 0px",
                    "background": "rgba(255,255,255, 1)",
                    "z-index": "999999",
                });
            } else {
                $('#Home-header').css({
                    "position": "static",
                    "height": "20vh",
                    "background": "rgba(255,255,255, 1)",
                    "width": "100vw !important",
                });
                $('#About').css({
                    "margin-top": "0vh",
                });
            };
            
        };
        
    });
    // Home page header sticky code Start
    
    
    // Side menu functioning for home page start
    $('.side-menu-hide-btn').css("display", "none");
    
    
    $('.side-menu-show-btn').click(function () {
        $('.side-menu-show-btn').hide(300);
        $('.side-menu-hide-btn').show(300);

        $('body').css({
            "background": "#000",
        });
        
        if ($(window).width() < 768) {
            
            $('.side-menu-container').css({
                "width": "100%",
                "right": "0",
                "position": "fixed",
                "z-index": "9999999",
                "opacity": "1",
                "background": "#000",
            });
            
            $('.main-container').css({
                "width": "calc(100% - 300px)"
            });
            $('#Home-header').css({
                "width": "calc(100vw - 300px)"
            });
            
        } else {
            $('.side-menu-container').css({
                "width": "350px",
                "right": "0",
                "position": "fixed",
                "z-index": "9999999",
                "opacity": "1",
                "background": "#000",
            });
            
            $('.main-container').css({
                "width": "calc(100% - 350px)",
            });
            $('#Home-header').css({
                "width": "calc(100vw - 350px)",
            });
        };
        
        if ($(window).width() > 1367) {
            
            $('.side-menu-container').css({
                "width": "600px",
                "right": "0",
                "position": "fixed",
                "z-index": "9999999",
                "opacity": "1",
                "background": "#000",
            });
            
            $('.main-container').css({
                "width": "calc(100% - 600px)",
            });
            $('#Home-header').css({
                "width": "calc(100vw - 600px)",
            });
            
        }
    });
    
    $('.side-menu-hide-btn').click(function () {
        $('.side-menu-hide-btn').hide(300);
        $('.side-menu-show-btn').show(300);
        $('.side-menu-container').css({
            "width": "0px",
            "right": "0px",
            "position": "absolute",
            "z-index": "0",
            "opacity": "0",
        });
        $('.main-container').css("width", "100vw");
        $('#Home-header').css({
            "width": "100vw"
        }, 300);

        $('body').css({
            "background": "#fff",
        });
        
    });
    
    // Side menu functioning for home page End
    
    
    
    //Code for sticky menu of other pages Start
    var hdr_offset = $('.header-main');
    
    if (hdr_offset.length) {
        var x = hdr_offset.offset().top;
    }
    
    $(window).scroll(function () {
        var y = $(window).scrollTop();
        
        if (y > x) {
            $('.header-main').addClass('sticky');
        } else {
            $('.header-main').removeClass('sticky');
        };
    });
    $('.header-main').wrapAll('<div class="cover">');
    $('.cover').css('min-height', $('.header-main').outerHeight());
    $('.cover').css('height', 'auto');
    //Code for sticky menu of other pages End
    
    
    
    //jQuery Code for back to top Start
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        
        var showScrollButton = 5;
        
        if (wScroll > showScrollButton) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        };
        
    });
    
    $('#top').click(function () {
        $('body, html').animate({
            scrollTop: 0,
        }, 2000);
        return false;
    });
    //jQuery Code for back to top End
    
    
    var mywiper = new Swiper('.swiper-cont.video-slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 1500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });
    
    // Video popup code
    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1',
                },
            },
            srcAction: 'iframe_src',
        },
    });


    // Project background slider codes Start
    var myProjectSwiper = new Swiper('.swiper-contain.project-slider', {
        // Optional parameters
        direction: 'horizontal',
        // direction: 'vertical',
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.project-button-next',
          prevEl: '.project-button-prev',
        },
        autoplay: true,
        speed: 1500,
    });
    // Project background slider codes End

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });








});