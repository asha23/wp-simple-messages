

(function( $ ) {
	$( document ).ready(function() {
		$('.bulkactions #bulk-action-selector-top').change(function(){
			var type_val = $(this).val() + "[]";
			$('.check-column .sm-check').attr('name', type_val);
		});
	


	});

})(jQuery);
