$(document).ready(function() {
    // Animaciones del navbar
    $('.navbar-brand').hover(
        function() {
            // Mouse enter
            $(this).css({
                'opacity': '0.8',
                'transform': 'scale(1.1) translateY(-2px)',
                'transition': 'all 0.3s ease'
            });
            
            // Animar los iconos
            $(this).find('i').css({
                'color': '#ffd700',
                'transform': 'rotate(360deg)',
                'transition': 'all 0.5s ease'
            });
        },
        function() {
            // Mouse leave
            $(this).css({
                'opacity': '1',
                'transform': 'scale(1) translateY(0)',
                'transition': 'all 0.3s ease'
            });
            
            // Restaurar los iconos
            $(this).find('i').css({
                'color': 'white',
                'transform': 'rotate(0deg)',
                'transition': 'all 0.5s ease'
            });
        }
    );

    // Common text styles for hero elements
    function initializeHeroStyles() {
        const $heroTitle = $('.hero-title');
        const $heroText = $('.hero-text');

        // Common text styles
        const textStyles = {
            'font-family': "'Bebas Neue', sans-serif",
            'letter-spacing': '3px',
            'font-weight': '700',
            'text-transform': 'uppercase'
        };

        // Apply common styles
        $heroTitle.css(textStyles);
        $heroText.css(textStyles);

        // Initial state
        $heroTitle.css({
            'opacity': '0',
            'transform': 'translateY(30px)',
            'text-shadow': 'none'
        });
        
        $heroText.css({
            'opacity': '0',
            'transform': 'translateY(20px)',
            'text-shadow': 'none'
        });

        // Animate title with enhanced effects
        setTimeout(() => {
            $heroTitle.css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition': 'all 1s ease',
                'animation': 'titlePulse 3s infinite',
                'text-shadow': '0 0 10px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.5)'
            });
        }, 500);

        // Animate subtitle with enhanced effects
        setTimeout(() => {
            $heroText.css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition': 'all 0.8s ease',
                'animation': 'textFloat 4s infinite ease-in-out',
                'text-shadow': '0 0 15px rgba(255, 255, 255, 0.8)'
            });

            // Add floating animation
            setInterval(() => {
                $heroText.animate({
                    'opacity': '0.8'
                }, 1000).animate({
                    'opacity': '1'
                }, 1000);
            }, 2000);
        }, 1000);
    }

    // Call animation on page load
    initializeHeroStyles();

    // Enhanced hover effects
    $('.hero-title').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'text-shadow': '0 0 20px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.7)',
                'color': '#ffd700',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'text-shadow': '0 0 10px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.5)',
                'color': '#ffffff',
                'transition': 'all 0.3s ease'
            });
        }
    );

    $('.hero-text').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05)',
                'text-shadow': '0 0 20px rgba(255, 255, 255, 1)',
                'color': '#ffd700',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'text-shadow': '0 0 15px rgba(255, 255, 255, 0.8)',
                'color': '#ffffff',
                'transition': 'all 0.3s ease'
            });
        }
    );

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, 'easeOutExpo');
    });

    // Testimonial Carousel Configuration
    $('#testimonialCarousel').carousel({
        interval: 5000, // Time between slides
        pause: 'hover' // Pause on mouse hover
    });

    // Add fade effect when switching testimonials
    $('#testimonialCarousel').on('slide.bs.carousel', function (e) {
        const $nextSlide = $(e.relatedTarget).find('.testimonial-card');
        
        $nextSlide.css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        });
        
        setTimeout(function() {
            $nextSlide.css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 100);
    });

    // Featured Classes Card Animations
    $('.class-card').hover(
        function() {
            $(this).stop().animate({
                transform: 'translateY(-10px)'
            }, 200);
            
            // Scale up image
            $(this).find('.card-img-top').css({
                'transform': 'scale(1.1)',
                'transition': 'transform 0.3s ease'
            });

            // Add glow effect
            $(this).css({
                'box-shadow': '0 5px 15px rgba(255, 215, 0, 0.4)',
                'transition': 'all 0.3s ease'
            });

            // Animate icon
            $(this).find('.bi').css({
                'color': '#ffd700',
                'transform': 'rotateY(360deg)',
                'transition': 'all 0.5s ease'
            });
        },
        function() {
            $(this).stop().animate({
                transform: 'translateY(0)'
            }, 200);
            
            // Reset image scale
            $(this).find('.card-img-top').css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease'
            });

            // Remove glow effect
            $(this).css({
                'box-shadow': 'none',
                'transition': 'all 0.3s ease'
            });

            // Reset icon
            $(this).find('.bi').css({
                'color': 'inherit',
                'transform': 'rotateY(0deg)',
                'transition': 'all 0.5s ease'
            });
        }
    );

    // Fade in cards on scroll
    function revealCards() {
        $('.class-card').each(function(i) {
            const cardPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollPosition > cardPosition - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition': 'all 0.5s ease'
                });
            }
        });
    }

    // Initial state for cards
    $('.class-card').css({
        'opacity': '0',
        'transform': 'translateY(20px)'
    });

    // Call on scroll and load
    $(window).on('scroll load', revealCards);

    // Counter Animation
    function startCounterAnimation() {
        $('.counter').each(function() {
            const $this = $(this);
            const target = parseInt($this.data('target'));
            
            // Only start if counter hasn't been animated yet
            if (!$this.hasClass('counted')) {
                $({ Counter: 0 }).animate({
                    Counter: target
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    },
                    complete: function() {
                        $this.addClass('counted');
                        $this.text(target);
                    }
                });
            }
        });
    }

    // Start counter when section is in viewport
    function checkCounterVisibility() {
        const counterSection = $('.counter-section');
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();
        const offsetTop = counterSection.offset().top;

        if (scrollTop + windowHeight > offsetTop + 100) {
            startCounterAnimation();
            // Remove scroll listener once animation has started
            $(window).off('scroll', checkCounterVisibility);
        }
    }

    // Check on scroll and initial load
    $(window).on('scroll', checkCounterVisibility);
    checkCounterVisibility();
});

