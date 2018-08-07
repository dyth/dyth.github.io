var screen_height = $(window).height();
var activation_offset = 0.5;
var element_position1 = $('#right2').offset().top;
var element_position2 = $('#right2').offset().top;
var element_position3 = $('#right3').offset().top;
var activation_point1 = element_position1 - (screen_height * activation_offset);
var activation_point2 = element_position2 - (screen_height * activation_offset);
var activation_point3 = element_position3 - (screen_height * activation_offset);

$("#c1").fadeIn(0);
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    if (y_scroll_pos < activation_point2) {
    	hideAll("c1");
    	$("#c1").fadeIn(0);
    }

    if ((y_scroll_pos > activation_point2) && (y_scroll_pos < activation_point3)) {
    	hideAll("c2");
    	$("#c2").fadeIn(0);
    }

    if (y_scroll_pos > activation_point3) {
    	hideAll("c3");
    	$("#c3").fadeIn(0);
    }
});

function hideAll(exceptMe) {
	$(".left").each(function(i) {
		if ($(this).attr("id") == exceptMe)
			return;
		$(this).fadeOut();
	});
}
