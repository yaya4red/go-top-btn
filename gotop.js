$(document).ready(function() { 
	var btn = $(".top-btn");
	btn.hide();
	$(window).scroll(function(){
		if ($(window).scrollTop() < 180) {
			btn.fadeOut("slow");
		} else {
			btn.fadeIn("slow");
		}
	});
	btn.on("click", function() {
		$("html, body").animate({ scrollTop: 0 }, 700);
	});
});