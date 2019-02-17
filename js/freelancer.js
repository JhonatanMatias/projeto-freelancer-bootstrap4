$(document).ready(function() {


	//Rolagem suave com jquery Easing.
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {

				$('html, body').animate({

					scrollTop: (target.offset().top - 70)
				},1000,"easeInOutExpo");

				return false;
			}
		}
	})

	//Aparencia do botão de rolagem para o topo
	$(document).scroll(function(){
		var scrollDistance = $(this).scrollTop();

		if(scrollDistance > 100){

			$('.scroll-to-top').fadeIn();
		} else {

			$('.scroll-to-top').fadeOut();
		}

	});

	//Efeito de fechamento do menu responsivo quando um link é cliclado.
	$('.js-scroll-trigger').click(function() {

		$('.navbar-collapse').collapse('hide');
	})


	//Ativando scrollspy para adicionar uma classe active nos itens da barra de navegação ao rolar.
	$('body').scrollspy({

		target: '#navPrincipal',
		offset: 80
	});

	//Modal popup$ (function() {
	$('.portfolio-item').magnificPopup({

		type: 'inline',
		preloader: false,
		focus: '',
		modal: true

	});
	 $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    	e.preventDefault();
   		$.magnificPopup.close();
  });
});