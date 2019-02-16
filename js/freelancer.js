$(document).ready(function() {


	//rolagem suave com jquery Easing
	$('a.js-scroll-trigger[href*="#"]:not[href="#"]').click(function(){

		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length){

				$('html','body').animate({

					scrollTop: (target.offset().top - 70)
				},1000,"EaseInOutExpo");

				return false;
			}
		}
	})

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