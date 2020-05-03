(function ($) {
    'use strict';
    
    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').fadeOut(100);
    });


    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        /*
         Fix js error, occurred at pages other than the home page.
         When there're no parallax, just ignore the below
         other operations, as below elements are bingding to the parallax.
        */
        if (!parallaxBox) {
            return ;
        }

        var
            c2left = document.getElementById('background').offsetLeft,
            c2top = document.getElementById('background').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            mouseParallax('background', c2left, c2top, x, y, 20);
        };
    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var containerEl = document.querySelector('.shuffle-wrapper');
    if (containerEl) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
            itemSelector: '.shuffle-item',
            buffer: 1
        });

        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }
    
    /* Common */
    
    // Smooth scroll to section
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
        
        $('html, body').animate(
          {
              scrollTop: $($(this).attr('href')).offset().top - 162,
          },
          500,
          'linear'
        )
    })
    
    // Scroll to top
    var scrollTop = $("#scrollTop");
    
    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();
        
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
            
        } else {
            $(scrollTop).css("opacity", "0");
        }
        
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
        
    });
    /* /Common */
    
    /* Homepage */
    $('.homepage-services--card').hover(
      function(){ $(this).addClass('active-bg-primary') },
      function(){ $(this).removeClass('active-bg-primary') }
    )
    /* /Homepage */
    
})(jQuery);
