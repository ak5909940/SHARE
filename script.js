(function() {

	$('.share').on('click', function(e) {

		e.preventDefault();

		var $this = $(this);

		$this.animate({
			'width': $this.width() == 304 ? '64px' : '304px'
		}, 300, 'swing');

	});

} () );