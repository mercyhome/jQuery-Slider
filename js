$(function() {
        $("#slider").slider({
			value: 25,
			min:   0,
			max:   1000,
			step:  25,
			slide: function (event, ui) {
                $("#amount").val("$" + ui.value);
                $('#images').children().hide();
                $("#"+ui.value).show();
            }
		});
		$("#amount").val("$" + $("#slider").slider("value") );
	});
