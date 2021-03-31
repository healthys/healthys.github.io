$('.jsSlide').slick({
	dots: true,
	infinite: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$("input").change(function() {
	if($(this).val()){
		$(this).addClass('value-true')
	}
});