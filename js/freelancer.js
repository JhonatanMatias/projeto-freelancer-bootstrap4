(function($) {

	"use strict";

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
})(JQuery);