jQuery(document).ready(function($) {

    // Homepage slider
    if ($('.head-slider').length) {
        $('.head-slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 6000,
            fade: true,
            autoplay: true,
            prevArrow: '<span class="left carousel-control"><span class="icon-prev"></span></span>',
            nextArrow: '<span class="right carousel-control"><span class="icon-next"></span></span>',
        });
    }

    // Games page
    $('.banner, .main-banner', '.section-games').hover(
        function() { $('.btn', $(this).parent()).addClass('hover'); },
        function() { $('.btn', $(this).parent()).removeClass('hover'); }
    );

    // Main menu highlight
    $('a', '#main-nav').mouseup(function(){
        $(this).blur();
    });
	
	$('.navbar-nav li').click(function(){
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});

}(jQuery));
