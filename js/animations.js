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

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Pricing toggle functionality
    $('#planToggle').on('change', function() {
        const isAnnual = $(this).prop('checked');
        
        $('.pricing-amount').each(function() {
            const $amount = $(this).find('.amount');
            const $period = $(this).find('.period');
            
            const monthly = parseInt($amount.data('monthly'));
            const annual = parseInt($amount.data('annual'));
            
            // Animate the number change
            $({ value: parseInt($amount.text()) }).animate({
                value: isAnnual ? annual : monthly
            }, {
                duration: 500,
                easing: 'swing',
                step: function() {
                    $amount.text(Math.round(this.value));
                }
            });
            
            // Update the period text
            $period.fadeOut(200, function() {
                $(this).text(isAnnual ? '/año' : '/mes').fadeIn(200);
            });
        });
        
        // Update savings badges
        if (isAnnual) {
            $('.pricing-card').append('<div class="badge bg-success position-absolute top-0 end-0 m-2">16% ahorro</div>');
        } else {
            $('.pricing-card .badge.bg-success').remove();
        }
    });

    // Animate pricing cards on scroll
    const animatePricingCards = () => {
        $('.pricing-card').each(function(index) {
            const card = $(this);
            // Asegurar que los precios sean visibles desde el inicio
            card.css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
            
            // Mantener visible el contenido de la tarjeta
            card.find('.pricing-amount, .amount, .currency, .period').css({
                'opacity': '1',
                'color': '#ffffff'
            });
        });
    };

    // Llamar a la función inmediatamente después de que el documento esté listo
    animatePricingCards();

    // Asegurar que los precios permanezcan visibles después del toggle
    $('#planToggle').on('change', function() {
        const isAnnual = $(this).prop('checked');
        
        $('.pricing-amount').each(function() {
            const $amount = $(this).find('.amount');
            const $period = $(this).find('.period');
            
            // Forzar visibilidad
            $amount.css('opacity', '1');
            $period.css('opacity', '1');
            
            const monthly = parseInt($amount.data('monthly'));
            const annual = parseInt($amount.data('annual'));
            
            // ...resto del código existente del toggle...
        });
    });

    // Form validation
    const $contactForm = $('#contactForm');
    const $submitButton = $contactForm.find('button[type="submit"]');
    const $spinner = $submitButton.find('.spinner-border');
    const $buttonText = $submitButton.find('.button-text');

    // Real-time validation
    $contactForm.find('input, textarea, select').on('input', function() {
        const $field = $(this);
        const isValid = $field[0].checkValidity();
        
        if ($field.val()) {
            $field.removeClass('is-invalid').addClass(isValid ? 'is-valid' : 'is-invalid');
        } else {
            $field.removeClass('is-valid is-invalid');
        }
    });

    // Phone number validation
    $('#telefono').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });

    // Form submission
    $contactForm.on('submit', function(e) {
        e.preventDefault();
        
        if (!this.checkValidity()) {
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // Show spinner
        $spinner.removeClass('d-none');
        $buttonText.text('Enviando...');
        $submitButton.prop('disabled', true);

        // Simulate API call
        setTimeout(() => {
            // Hide spinner
            $spinner.addClass('d-none');
            $buttonText.text('Enviar mensaje');
            $submitButton.prop('disabled', false);

            // Reset form
            $contactForm[0].reset();
            $contactForm.removeClass('was-validated');
            $contactForm.find('.is-valid').removeClass('is-valid');

            // Show modal
            $('#confirmationModal').modal('show');
        }, 2000);
    });

    // Blog Functionality
    if ($('.tags-filter').length) {
        // Scroll Reveal for Articles with stagger effect
        function revealOnScroll() {
            $('.article-card').each(function(index) {
                const articleTop = $(this).offset().top;
                const windowHeight = $(window).height();
                const scrollY = $(window).scrollTop();
                const revealPoint = 150;

                if (articleTop < scrollY + windowHeight - revealPoint) {
                    setTimeout(() => {
                        $(this).addClass('revealed');
                    }, index * 200); // Efecto stagger: cada artículo aparece 200ms después
                }
            });
        }

        // Initialize articles
        $('.article-card').css({
            'opacity': '0',
            'transform': 'translateY(30px)',
            'transition': 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        });

        // Check on load and scroll
        $(window).on('load scroll', revealOnScroll);

        // Utility function para generar colores de avatar
        function getAvatarColor(name) {
            let hash = 0;
            for (let i = 0; i < name.length; i++) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }
            const hue = Math.abs(hash % 360);
            return `hsl(${hue}, 70%, 40%)`;
        }

        // Comments System
        const comments = [
            {
                id: 1,
                author: "María Marta del Milagro Juarez",
                content: "¡Excelente artículo! Me encantó la información sobre nutrición deportiva.",
                date: "2024-03-15",
                likes: 8,
                isLiked: false,
                replies: [
                    {
                        id: "r1",
                        author: "Carlos Ruiz",
                        content: "¡Gracias María! Me alegro que te haya servido.",
                        date: "2024-03-15",
                        likes: 3,
                        isLiked: false
                    }
                ]
            },
            {
                id: 2,
                author: "Martin Alejandro Bonari",
                content: "Las rutinas de entrenamiento están muy bien explicadas. Voy a empezar a aplicarlas.",
                date: "2024-03-14",
                likes: 12,
                isLiked: false,
                replies: [
                    {
                        id: "r2",
                        author: "Ana López",
                        content: "¡Coincido totalmente! Ya las estoy implementando.",
                        date: "2024-03-14",
                        likes: 4,
                        isLiked: false
                    }
                ]
            },
            {
                id: 3,
                author: "Fabrizio Luciano Armada",
                content: "Excelente información sobre suplementación. Los consejos sobre creatina son muy útiles.",
                date: "2024-03-13",
                likes: 6,
                isLiked: false,
                replies: []
            }
        ];

        function renderComments() {
            const $container = $('.comments-container');
            if ($container.length) {
                $container.empty();
                
                comments.forEach(comment => {
                    const avatarColor = getAvatarColor(comment.author);
                    const heartIcon = comment.isLiked ? 'bi-heart-fill text-danger' : 'bi-heart';
                    const $comment = $(`
                        <div class="comment mb-4" data-comment-id="${comment.id}">
                            <div class="d-flex">
                                <div class="comment-avatar me-3" style="background-color: ${avatarColor}">
                                    ${comment.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                </div>
                                <div class="flex-grow-1">
                                    <h5 class="mb-1">${comment.author}</h5>
                                    <p class="mb-2">${comment.content}</p>
                                    <div class="comment-actions mb-3">
                                        <a class="like-btn" role="button"><i class="bi ${heartIcon}"></i> ${comment.likes}</a>
                                        <a class="reply-btn ms-3" role="button"><i class="bi bi-reply"></i> Responder</a>
                                        <small class="text-muted ms-3">${comment.date}</small>
                                    </div>
                                    ${comment.replies ? `
                                        <div class="replies ms-4 border-start border-secondary ps-3">
                                            ${comment.replies.map(reply => {
                                                const replyAvatarColor = getAvatarColor(reply.author);
                                                const replyHeartIcon = reply.isLiked ? 'bi-heart-fill text-danger' : 'bi-heart';
                                                return `
                                                    <div class="reply mb-3" data-reply-id="${reply.id}">
                                                        <div class="d-flex align-items-start">
                                                            <div class="comment-avatar me-2" style="background-color: ${replyAvatarColor}; width: 35px; height: 35px; font-size: 0.9rem;">
                                                                ${reply.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1">${reply.author}</h6>
                                                                <p class="mb-1 small">${reply.content}</p>
                                                                <div class="reply-actions">
                                                                    <a class="like-btn" role="button"><i class="bi ${replyHeartIcon}"></i> ${reply.likes}</a>
                                                                    <small class="text-muted ms-3">${reply.date}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `);
                    
                    $container.append($comment);
                });
            }
        }

        // Initialize comments
        renderComments();

        // Comment Form Handler
        $('#comment-form').on('submit', function(e) {
            e.preventDefault();
            const content = $('#comment-text').val().trim();
            const replyToId = $(this).data('reply-to');
            
            if (content) {
                if (replyToId) {
                    const parentComment = comments.find(c => c.id === replyToId);
                    if (parentComment) {
                        if (!parentComment.replies) parentComment.replies = [];
                        parentComment.replies.push({
                            id: `r${Date.now()}`,
                            author: "Usuario Actual",
                            content: content.replace(`@${parentComment.author} `, ''),
                            date: new Date().toLocaleDateString(),
                            likes: 0,
                            isLiked: false
                        });
                    }
                    $(this).removeData('reply-to');
                } else {
                    comments.unshift({
                        id: comments.length + 1,
                        author: "Usuario Actual",
                        content: content,
                        date: new Date().toLocaleDateString(),
                        likes: 0,
                        isLiked: false
                    });
                }
                
                renderComments();
                $('#comment-text').val('');
            }
        });

        // Like functionality for both comments and replies
        $(document).on('click', '.like-btn', function() {
            const $comment = $(this).closest('.comment');
            const $reply = $(this).closest('.reply');
            
            if ($reply.length) {
                const commentId = $comment.data('comment-id');
                const replyId = $reply.data('reply-id');
                const comment = comments.find(c => c.id === commentId);
                if (comment && comment.replies) {
                    const reply = comment.replies.find(r => r.id === replyId);
                    if (reply) {
                        reply.isLiked = !reply.isLiked;
                        reply.likes += reply.isLiked ? 1 : -1;
                    }
                }
            } else {
                const commentId = $comment.data('comment-id');
                const comment = comments.find(c => c.id === commentId);
                if (comment) {
                    comment.isLiked = !comment.isLiked;
                    comment.likes += comment.isLiked ? 1 : -1;
                }
            }
            
            renderComments();
        });

        // Reply functionality
        $(document).on('click', '.reply-btn', function() {
            const $comment = $(this).closest('.comment');
            const author = $comment.find('h5').text();
            const commentId = $comment.data('comment-id');
            $('#comment-form').data('reply-to', commentId);
            $('#comment-text').val(`@${author} `).focus();
        });
    }

    // Blog Tags Filter System
    function initBlogFilters() {
        const $articles = $('.article-card');
        const $filterButtons = $('.tags-filter .btn');

        $filterButtons.on('click', function() {
            const filter = $(this).data('filter');
            
            // Toggle active state
            $filterButtons.removeClass('active');
            $(this).addClass('active');
            
            if (filter === 'all') {
                $articles.fadeIn(300);
                return;
            }

            $articles.each(function() {
                const tags = $(this).data('tags').split(' ');
                if (tags.includes(filter)) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        });
    }

    // Initialize cuando el DOM esté listo
    if ($('.tags-filter').length) {
        initBlogFilters();
    }

}); // End of document.ready