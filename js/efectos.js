$(document).ready(function(){
 $('.menu a').each(function(index, elemento){
 	$(this).css({
 		'top': '-400'
 	});
 	$(this).animate({
 		top: '0'
 	}, 2000 + (index * 500));
 });


  
 $('.redes').each(function(index, elemento){
 	$(this).css({
 		'marginLeft': '-400'
 	});
 	$(this).animate({
 		marginLeft: '0'
 	}, 1500 + (index));
 	});


	 var Trabajos = $('#Trabajos').offset().top;
	
	 	$('#btn-Trabajos').on('click', function(){
	 		$('html, body').animate({
 				scrollTop: 800
	 		},500);

 		});

	 	 var Trabajos = $('#Contacto').offset().top;
	
	 	$('#btn-Contacto').on('click', function(){
	 		$('html, body').animate({
 				scrollTop: 1200
	 		},500);

 		});
	


});