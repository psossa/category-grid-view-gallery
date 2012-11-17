/* Author : Anshul Sharma (contact@anshulsharma.in) */
jQuery(document).ready(function($) {
	// To remove the css class for CSS fallback strategy
	$("div.cgview ul li div").removeClass("cgnojs");
							
  $("div.cgview li").mouseenter(function(){
	var e = document.getElementById(this.id); 
  	var d = e.getElementsByTagName("div");
		$(d[0]).stop(true,true).animate({height: '35%'},200);
		$(d[1]).stop(true,true).animate({height: '32%'},200);
	});
  $("div.cgview li").mouseleave(function(){
	var e = document.getElementById(this.id); 
  	var d = e.getElementsByTagName("div");
		$(d[0]).stop(true,true).animate({height: '0px'},200);
		$(d[1]).stop(true,true).animate({height: '0px'},200);
	});
  /*Events for colorbox (Fix for small popup window in colorbox due to delay in load of images*/
  $(".cgpost").colorbox({onComplete:function(){$.colorbox.resize();}});  
 
});

