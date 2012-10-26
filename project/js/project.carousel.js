/*
 * Add controls and trigger any bootstrap carousel to start on page load.
 */
jQuery(function ($) {

    /**
     * Apply this function with the carousel element as the context to
     * initialise the controls.
     */
    var addControls = function () {

        var $carousel = $(this);
        var $controls = $('<div class="carousel-controls"></div>');

        $carousel.find('.item').each(function (i) {
            var $item = $(this);
            var $control = $('<button></button>');

            $control.click(function () {
                $carousel.carousel(i);
            });

            $item.data('item-control', $control);

            if ($item.hasClass('active')) {
                $control.addClass('control-active');
            }

            $controls.append($control);
        });

        $carousel.bind('slid', function () {
            $carousel.find('.control-active').removeClass('control-active');
            $carousel.find('.active').data('item-control').addClass('control-active');
        })

        $carousel.append($controls);
    };

    $('.carousel').carousel().each(addControls);

});