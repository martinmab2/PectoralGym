$(document).ready(function() {
    $('.navbar-brand').hover(
        function() {
            // Mouse enter
            $(this).stop().animate({
                opacity: 0.8,
                fontSize: '1.3em'
            }, 200);
            
            // Animar los iconos
            $(this).find('i').animate({
                opacity: 1
            }, 200).css({
                'color': '#ffd700',
                'transform': 'rotate(360deg)',
                'transition': 'transform 0.5s'
            });
        },
        function() {
            // Mouse leave
            $(this).stop().animate({
                opacity: 1,
                fontSize: '1em'
            }, 200);
            
            // Restaurar los iconos
            $(this).find('i').animate({
                opacity: 1
            }, 200).css({
                'color': 'white',
                'transform': 'rotate(0deg)'
            });
        }
    );
});