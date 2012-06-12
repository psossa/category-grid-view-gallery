/* Author : Anshul Sharma (contact@anshulsharma.in) */
$j=jQuery.noConflict();
jQuery(document).ready(function($j) {
	// To remove the css class for CSS fallback strategy
	$j("div.cgview ul li div").removeClass("cgnojs");
							
  $j("div.cgview li").mouseenter(function(){
	var e = document.getElementById(this.id); 
  	var d = e.getElementsByTagName("div");
	if($j(d[0]).attr('class')=='hover'){
		$j(d[0]).stop(true,true).animate({height: '35%'},200);
		$j(d[1]).stop(true,true).animate({height: '32%'},200);
	}
	});
  $j("div.cgview li").mouseleave(function(){
	var e = document.getElementById(this.id); 
  	var d = e.getElementsByTagName("div");
	if($j(d[0]).attr('class')=='hover'){
		$j(d[0]).stop(true,true).animate({height: '0px'},200);
		$j(d[1]).stop(true,true).animate({height: '0px'},200);
	}
	
	});
  /*Events for colorbox (Fix for small popup window in colorbox due to delay in load of images*/
  $j(".cgpost").colorbox({onComplete:function(){$j.colorbox.resize();}});  
  
  /* Pagination */
  if(paginateVal){
 	 $j('ul#cg-ul').easyPaginate({
  		step:paginateVal,
		nextprev:false,
		controls:'cg-page-controls'
  });
  }
 
});

