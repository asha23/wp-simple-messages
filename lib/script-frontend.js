(function( $ ) {
	$( document ).ready(function() {

		dots = 0;
		function type() {
			if(dots < 3)	{
				$('.msg-dots').append('.');
				dots++;
			} else {
				$('.msg-dots').html('');
				dots = 0;
			}
		}

		setInterval (type, 200);


	});

})(jQuery);
