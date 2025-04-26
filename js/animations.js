$(document).ready(function() {
    // Animaciones del navbar
    $('.navbar-brand').css({
        'opacity': '0',
        'transform': 'translateX(80px)',
        'transition': 'all 1.2s cubic-bezier(0.4,0,0.2,1)' // Duración aumentada
    });
    setTimeout(function() {
        $('.navbar-brand').css({
            'opacity': '1',
            'transform': 'translateX(0)',
            'transition': 'all 1.2s cubic-bezier(0.4,0,0.2,1)' // Duración aumentada
        });
    }, 600); // Retraso ligeramente mayor

    $('.navbar-brand').hover(
        function() {
            $(this).css({
                'opacity': '0.8',
                'transform': 'scale(1.1) translateY(-2px)',
                'transition': 'all 0.3s ease'
            });
            $(this).find('i').css({
                'color': '#ffd700',
                'transform': 'rotate(360deg)',
                'transition': 'all 0.5s ease'
            });
        },
        function() {
            $(this).css({
                'opacity': '1',
                'transform': 'scale(1) translateY(0)',
                'transition': 'all 0.3s ease'
            });
            $(this).find('i').css({
                'color': 'white',
                'transform': 'rotate(0deg)',
                'transition': 'all 0.5s ease'
            });
        }
    );

    // Hero styles y animaciones
    function initializeHeroStyles() {
        const $heroTitle = $('.hero-title');
        const $heroText = $('.hero-text');
        const textStyles = {
            'font-family': "'Bebas Neue', sans-serif",
            'letter-spacing': '3px',
            'font-weight': '700',
            'text-transform': 'uppercase'
        };
        $heroTitle.css(textStyles);
        $heroText.css(textStyles);
        // Animación desde la derecha
        $heroTitle.css({
            'opacity': '0',
            'transform': 'translateX(80px) scale(0.95)',
            'text-shadow': 'none'
        });
        $heroText.css({
            'opacity': '0',
            'transform': 'translateX(80px) scale(0.95)',
            'text-shadow': 'none'
        });
        setTimeout(() => {
            $heroTitle.css({
                'opacity': '1',
                'transform': 'translateX(0) scale(1)',
                'transition': 'all 1.6s cubic-bezier(0.4,0,0.2,1)', // Duración aumentada
                'text-shadow': '0 0 10px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.5)'
            });
        }, 700); // Retraso mayor
        setTimeout(() => {
            $heroText.css({
                'opacity': '1',
                'transform': 'translateX(0) scale(1)',
                'transition': 'all 1.2s cubic-bezier(0.4,0,0.2,1)', // Duración aumentada
                'text-shadow': '0 0 15px rgba(255, 255, 255, 0.8)'
            });
        }, 1200); // Retraso mayor
    }
    initializeHeroStyles();

    // Hover hero
    $('.hero-title').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.08)', // Reduce el zoom para evitar corte
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

    // Smooth scroll para anchors internos
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Testimonial Carousel (si existe)
    if ($('#testimonialCarousel').length) {
        $('#testimonialCarousel').carousel({
            interval: 5000,
            pause: 'hover'
        });
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
    }

    // Animación de tarjetas de clases (usa .class-item en vez de .class-card)
    $('.class-item').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.5s ease'
    });
    function revealCards() {
        $('.class-item').each(function() {
            const cardPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scrollPosition > cardPosition - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }
    $(window).on('scroll load', revealCards);

    // Hover animación para tarjetas de clases
    $('.class-item').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-10px) scale(1.03)',
                'box-shadow': '0 5px 15px rgba(255, 215, 0, 0.4)',
                'transition': 'all 0.3s ease'
            });
            $(this).find('.card-img-top').css({
                'transform': 'scale(1.07)',
                'transition': 'transform 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0) scale(1)',
                'box-shadow': 'none',
                'transition': 'all 0.3s ease'
            });
            $(this).find('.card-img-top').css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease'
            });
        }
    );

    // Filtro de clases
    const $items = $('.class-item');
    const $checkboxes = $('.filter-checkbox');
    function handleFilters() {
        const checkedFilters = $checkboxes
            .filter(':checked')
            .map(function() { return $(this).val(); })
            .get();
        if (checkedFilters.length === 0 || checkedFilters.includes('all')) {
            $items.show();
            $('#filter-all').prop('checked', true);
            $checkboxes.not('#filter-all').prop('checked', false);
            return;
        }
        $items.hide();
        $items.each(function() {
            const itemCategory = $(this).data('category');
            if (checkedFilters.includes(itemCategory)) {
                $(this).show();
            }
        });
    }
    $checkboxes.on('change', function() {
        const $this = $(this);
        if ($this.val() === 'all' && $this.is(':checked')) {
            $checkboxes.not($this).prop('checked', false);
        } else if ($this.val() !== 'all') {
            $('#filter-all').prop('checked', false);
        }
        handleFilters();
    });
    // Inicializar filtros
    $('#filter-all').prop('checked', true);
    $checkboxes.not('#filter-all').prop('checked', false);
    handleFilters();

    // Counter Animation
    function startCounterAnimation() {
        $('.counter').each(function() {
            const $this = $(this);
            const target = parseInt($this.data('target'));
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

    // Start counter when section is in viewport or on load
    function checkCounterVisibility() {
        const $counterSection = $('.counter-section');
        if ($counterSection.length === 0) return;
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();
        const offsetTop = $counterSection.offset().top;
        // Si la sección está visible o la página acaba de cargar
        if (scrollTop + windowHeight > offsetTop + 100 || scrollTop === 0) {
            startCounterAnimation();
            $(window).off('scroll', checkCounterVisibility);
        }
    }

    // Llama siempre al cargar y al hacer scroll
    $(window).on('scroll', checkCounterVisibility);
    checkCounterVisibility();

    // Trainer Cards Animation
    $('.trainer-card').on('mouseenter', function() {
        const $card = $(this);
        const $progressBars = $card.find('.progress-bar');
        
        setTimeout(() => {
            $progressBars.each(function() {
                const percent = $(this).data('percent');
                $(this).css('width', percent + '%');
            });
        }, 400);
    });

    $('.trainer-card').on('mouseleave', function() {
        const $progressBars = $(this).find('.progress-bar');
        $progressBars.css('width', '0%');
    });

    // Inicializar animaciones de las tarjetas de entrenadores
    $('.trainer-card').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(30px)',
            'transition': 'all 0.5s ease'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 200 * (index + 1));
    });
});