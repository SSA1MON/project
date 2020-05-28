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
			$('.form__close').click(function() {
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

		orderсallButtons();

	function dropdownMenu() {
		$('.header__drop-menu').click(function() {
			$('.drop-menu__mob-menu').show();
			$('body').css('overflow', 'hidden');
		});

		$('.drop-menu__mob-menu :button').click(function() {
			$('.drop-menu__mob-menu').hide();
			$('.header__call').hide();
			$('body').css('overflow', 'visible');
		});
	};

	dropdownMenu();

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

    	setTimeout(animationSymbols, 1000);

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
		$('.dev-examples :button').click(function() {
			$('.about__learn-more').fadeIn(200);
			$('body').css('overflow', 'hidden');
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

    	learnmoreButtons();

    function carouselSlider() {

    	$('.carousel').each(function () {

		  // Создаем карусель
		  var owl = $(this).find('.owl-carousel').owlCarousel({
		  	dotsEach: 1,
		  	loop: true,
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
    	carouselSlider();

});