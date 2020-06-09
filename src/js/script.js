$(document).ready(function(){
	$('.reviews__slider').slick({
		speed: 1200,
		
		slidesToShow: 1,
		
		centerMode: true,
		centerPadding: '28%',

		prevArrow: '<button type="button" class="slick-prev"><img src="../src/icons/sl-prev.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../src/icons/sl-next.png"></button>'
	});
//Модальные окна
	 $('[data-modal=consultation-btn]').on('click', function() {
		$('.overlay, #modal').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #modal').fadeOut('slow');
	});

//Валидация


	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символа!")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	}

	validateForms('#consultation-form');
	validateForms('#modal-form');
	validateForms('#question-form');

	//Номер телефона

	$('input[name=phone]').mask("+7 (999) 999-99-99");		

	

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.promo__menu'),
			menuItem = document.querySelectorAll('.promo__item'),
			hamburger = document.querySelector('.hamburger');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('promo__menu_active');
		});

		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('promo__menu_active');
			});
		});
	});

	// Скролл
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
});





