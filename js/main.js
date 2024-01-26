document.addEventListener('DOMContentLoaded', () => {
    "use strict"

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow')
        } else {
            $('.back-to-top').fadeOut('slow')
        }
    })

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo')
        return false
    })

    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0

                if ($('#header').length) {
                    top_space = $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        top_space = top_space - 20
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 500, 'easeInOutExpo')

                if ($(this).parents('.main-nav, .mobile-nav').length) {
                    $('.main-nav .active, .mobile-nav .active').removeClass('active')
                    $(this).closest('li').addClass('active')
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active')
                    $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars')
                    $('.mobile-nav-overly').fadeOut()
                }
                return false
            }
        }
    })

    // Navigation active state on scroll
    var nav_sections = $('section')
    var main_nav = $('.main-nav, .mobile-nav')
    var main_nav_height = $('#header').outerHeight()

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop()

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight()

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('li').removeClass('active')
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active')
            }
        })
    })

    new Swiper('.patent-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120
            }
        }
    })

    function updateButtonWidth() {
        const button1 = document.getElementById('button1')
        const button2 = document.getElementById('button2')

        if (window.innerWidth <= 447) {
            button1.classList.remove('w-50')
            button1.classList.add('w-100')

            button2.classList.remove('w-50')
            button2.classList.add('w-100')
        } else {
            button1.classList.remove('w-100')
            button1.classList.add('w-50')

            button2.classList.remove('w-100')
            button2.classList.add('w-50')
        }
    }

    window.addEventListener('load', updateButtonWidth)
    window.addEventListener('resize', updateButtonWidth)

})

function toggleCollapse() {
    const myCollapse = new bootstrap.Collapse(document.getElementById('myCollapse'), { toggle: true })
}

