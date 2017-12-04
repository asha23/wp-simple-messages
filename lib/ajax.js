function sm_process(e){

	recaptcharesponse = grecaptcha.getResponse();
	$('.fm-sub').hide();
	$('.fm-sub-over').show();
	if(recaptcharesponse.length === 0) {
		$(".captcha-message").show();
	} else {
		$(".captcha-message").hide();

		$.ajax({
			url:ajax_object.ajaxurl,
			type:"POST",
			data: {
				action: "sm_add_record",
				to:e["to"].value,
				from:e["from"].value,
				email:e["email"].value,
				location:e["location"].value,
				message:e["message"].value
			},
			success: function(data) {
				$("#sm_form").html(data);
				return false;
			},
			error: function(err) {
				return false;
			}
		});
	}

	return false;
}
