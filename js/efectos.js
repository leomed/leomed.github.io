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
 				scrollTop: 900
	 		},500);

 		});

	 	 var Trabajos = $('#Contacto').offset().top;
	
	 	$('#btn-Contacto').on('click', function(){
	 		$('html, body').animate({
 				scrollTop: 1300
	 		},500);

 		});
	

	$(window).scroll(function(){
		var windowWidth = $(window).width()
		if (windowWidth > 800) {

		var srcoll = $(window).scrollTop();

		$('main').css({
			opacity: 0,
			marginLeft: '100px'
			
		});

		$('main').animate({
			opacity: 1,
			marginLeft: 0

		});


		$('.cv .logo-bts').css({
			opacity: 0

		});

		$('.cv .logo-bts').animate({
			opacity: 1

		}, 3000);


		}







	});


});