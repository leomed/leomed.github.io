$(document).ready(function(){

	$('.botonn').on('click', function(){
		
		
		$('.contacto').slideToggle();
		

	});

	

	$(window).scroll(function(){

		if($(window).scrollTop() > 800){

			$('.cv').css({
			opacity: 0,
		
			});


			$('.cv').animate({
				opacity: 1
			});
			console.log('hola');
		}
	});

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
 	}, 1900 + (index));
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
		


		var scroll = $(window).scrollTop();
		
		$('main').css({
			opacity: 0,
			marginTop: '-20px'
		
		});

		$('main').animate({
			opacity: 1,
			marginTop: '20px'

		})};

	

	});

	

		



});