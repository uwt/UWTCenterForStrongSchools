$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');
	var page    = $(".page");

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		page.toggleClass("menuopen");
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});