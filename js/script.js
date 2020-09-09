$(document).ready(function(){
	$('.hide-btn').click(function(){
		$('.h4-hide').hide('slow');
	});

	$('.show-btn').click(function(){
		$('.h4-show').show('slow');
	});

	$('.toggle-btn').click(function(){
		$('.h4-toggle').toggle('slow');
	});

	$('.fadein-btn').click(function(){
		$('.h4-fadein').fadeIn(1000);
	});

	$('.h4-fadeout').mouseenter(function(){
		$(this).fadeOut(1000);
	});

	$('.fadetoggle-btn').click(function(){
		$('.h4-fadetoggle').fadeToggle(500);
	});

	$('.fadeto-btn').click(function(){
		$('.div-fadeto').fadeTo(500, 0.5);
	});

	$(".slidedown-h4").click(function(){
    	$("#slidedown").slideDown("slow");
  	});

  	$(".slideup-h4").click(function(){
    	$("#slideup").slideUp("slow");
  	});

  	$(".slidetoggle-h4").click(function(){
    	$("#slidetoggle").slideToggle("slow");
  	});

  	$(".btn-start").click(function(){
    	$(".stop_content").slideDown(5000);
  	});

  });