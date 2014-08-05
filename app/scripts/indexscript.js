$(document).ready( function() {

	$("#header div.nav ul li a").click(function(e){
		e.preventDefault();
		var rel = $(this).attr("href");
		var goTo =  $(rel).offset().top;
		//alert(goTo);
    	$("html, body").stop().animate({ scrollTop: goTo }, 1200);
		return false;
	});


	$(".go-top").click(function(){
		$("html, body").stop().animate({ scrollTop: 0 }, 800);
		return false;
	});
	
});