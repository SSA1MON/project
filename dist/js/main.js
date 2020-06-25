$(document).ready(function(){

	function orderсallButtons() {

		// Вызов формы заказа звонка
		$('.header :input').click(function() {
			$('.header__call').fadeIn(200);
			$('body').css('overflow', 'hidden');
		});
		$('.header__tel-mob').click(function() {
			$('.header__call').fadeIn(200);
			$('body').css('overflow', 'hidden');
		});
			// Закрытие формы заказа с помощью кнопки 
<<<<<<< HEAD
			$('.form__close').click(function() {
=======
<<<<<<< HEAD:app/js/main.js
			$('.form__close').click(function() {
=======
			$('.form__close :i').click(function() {
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c:dist/js/main.js
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c
				$('.header__call').fadeOut(200);
				$('body').css('overflow', 'visible');
			});

		// Вызов формы заказа в футере
		$('.footer-connect :input').click(function() {
			$('.header__call').fadeIn(200);
			$('body').css('overflow', 'hidden');
		});

		$('.header__call').click(function(event) {
			if (event.target == this) {
				$(this).fadeOut(200);
				$('body').css('overflow', 'visible');
			}
		});

	};

	function dropdownMenu() {
		$('.header__drop-menu').click(function() {
			$('.drop-menu__mob-menu').show();
			$('body').css('overflow', 'hidden');
		});

<<<<<<< HEAD
		$('.menu__close').click(function() {
=======
<<<<<<< HEAD:app/js/main.js
		$('.menu__close').click(function() {
=======
		$('.menu__close :i').click(function() {
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c:dist/js/main.js
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c
			$('.drop-menu__mob-menu').hide();
			$('.header__call').hide();
			$('body').css('overflow', 'visible');
		});
	};

	function animationSymbols()	{

		 if( window.innerWidth >= 1850 ){
		    $(".about-symbols__div").css('margin-top', '87px');
	        $(".about-symbols__div-two").css('margin-left', '740px');
	        $(".about-symbols__bracket").css('margin-left', '95px');
	        $(".about-symbols__sharp").css('margin-left', '243px');
	        $(".about-symbols__slash").css('margin-left', '371px');
		 } else {
		      return;
		 }
    };

    function learnmoreButtons() {

    	// Вызов формы
		$('.about-info :button').click(function() {
			$('.about__learn-more').fadeIn(200);
			$('body').css('overflow', 'hidden');
		});
		$('.block-developer :button').click(function() {
			$('.about__learn-more').fadeIn(200);
			$('body').css('overflow', 'hidden');
		});
<<<<<<< HEAD
		$('button.order').click(function() {
			$('.about__learn-more').fadeIn(200);
			$('body').css('overflow', 'hidden'); 
=======
<<<<<<< HEAD:app/js/main.js
		$('button.order').click(function() {
			$('.about__learn-more').fadeIn(200);
			$('body').css('overflow', 'hidden'); 
=======
		$('.dev-examples :button').click(function() {
			$('.about__learn-more').fadeIn(200);
			$('body').css('overflow', 'hidden');
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c:dist/js/main.js
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c
		});
			// Закрытие формы
			$('.form__close').click(function() {
				$('.about__learn-more').fadeOut(200);
				$('body').css('overflow', 'visible');
			});

		$('.about__learn-more').click(function(event) {
			if (event.target == this) {
				$(this).fadeOut(200);
				$('body').css('overflow', 'visible');
			}
		});

    };

    function carouselSlider() {

    	$('.carousel').each(function () {

		  // Создаем карусель
		  var owl = $(this).find('.owl-carousel').owlCarousel({
		  	dotsEach: 1,
		  	loop: true,
		  	margin: 40,
			  responsive: {
			    300: {
			      items: 1,
			      dots: true
			    },
			    650: {
			    	items: 2
			    },
			    1250: {
			    	items: 3
			    }
			  }
		  });

		  // При клике по кнопке Влево
		  $(this).find('.js-prev').on('click', function () {
		    // Перематываем карусель назад
		    owl.trigger('prev.owl.carousel');
		  });

		  // При клике по кнопке Вправо
		  $(this).find('.js-next').on('click', function () {
		    // Перематываем карусель вперед
		    owl.trigger('next.owl.carousel');
		  });
		});

    };

    function submitForms() {

	    $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-99-99" });

	    $('form').each(function() {
	    	$(this).validate({
	    		errorPlacement: function(error,element) {
	    			return true;
	    		},
	    		focusInvalid: false,
	    		rules: {
	    			Телефон: {
	    				required: true,
	    			},
	    			Имя: {
	    				required: true,
	    				maxlength: 10,
	    			},
	    			Почта: {
	    				required: true,
	    			}
	    		},
	    		submitHandler: function(form) {
	    			var th = $(form);

	    		$.ajax({
	    			type: 'POST',
	    			url: 'mail.php',
	    			data: th.serialize(),
	    		}).done(function() {
					console.log('Отправлено');
		  			$('.form__status').css('display', 'block');
		   			$(form).trigger('reset');
			   });

	    		return false;
	    		}
	    	});
	    });

    };

    function anchorMenu() {
    	$('.services').on('click', function(e) {
    		$('html,body').stop().animate({ scrollTop: $('.block-developer').offset().top }, 700);
    		e.preventDefault();
    	});
    	$('.activity').on('click', function(e) {
    		$('html,body').stop().animate({ scrollTop: $('.dev-examples').offset().top }, 700);
    		e.preventDefault();
    	});
    	$('.price').on('click', function(e) {
    		$('html,body').stop().animate({ scrollTop: $('.adaptive-info').offset().top }, 700);
    		e.preventDefault();
    	});
    	$('.up-page').on('click', function(e) {
    		$('html,body').stop().animate({ scrollTop: $('html,body').offset().top }, 700);
    		e.preventDefault();
<<<<<<< HEAD
=======
<<<<<<< HEAD:app/js/main.js
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c
		});
		
		if($(window).width() < 1024) {
			$('.services').on('click', function() {
				$('html,body').stop().animate({ scrollTop: $('.block-developer').offset().top }, 0);
				$('.drop-menu__mob-menu').hide();
				$('body').css('overflow', 'visible');
			});
			$('.activity').on('click', function() {
				$('html,body').stop().animate({ scrollTop: $('.dev-examples').offset().top }, 0);
				$('.drop-menu__mob-menu').hide(); 
				$('body').css('overflow', 'visible');
			});
			$('.price').on('click', function() {
				$('html,body').stop().animate({ scrollTop: $('.adaptive-info').offset().top }, 0);
				$('.drop-menu__mob-menu').hide();
				$('body').css('overflow', 'visible');
			});
		}
<<<<<<< HEAD
=======
=======
    	});
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c:dist/js/main.js
>>>>>>> fc9a350c3324e1a116fdad3054e3293eb12f6b5c
    };


    orderсallButtons();
    dropdownMenu();
	setTimeout(animationSymbols, 1000);
	learnmoreButtons();
	carouselSlider();
	submitForms();
	anchorMenu();

});