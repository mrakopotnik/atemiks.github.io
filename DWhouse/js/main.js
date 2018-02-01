$( document ).ready(function() {

	$('.select-custom').select2({
		 minimumResultsForSearch: Infinity
	});

	// main search
	$(".select-custom-style").select2({
		minimumResultsForSearch: Infinity,
	    placeholder: "Styles Collections",
	    allowClear: true
	});

	$(".select-custom-beds").select2({
		minimumResultsForSearch: Infinity,
	    placeholder: "Beds",
	    allowClear: true
	});

	$(".select-custom-baths").select2({
		minimumResultsForSearch: Infinity,
	    placeholder: "Baths",
	    allowClear: true
	});

	$(".select-custom-stories").select2({
		minimumResultsForSearch: Infinity,
	    placeholder: "Stories",
	    allowClear: true
	});

	$(".select-custom-garages").select2({
		minimumResultsForSearch: Infinity,
	    placeholder: "Garages",
	    allowClear: true
	});


	// mobile header
	$( ".header-toggle" ).on( "click", function() {
	  	$("body").toggleClass('mobile-offcanvas-active');
	  	$(".mobile-offcanvas").toggleClass('mobile-offcanvas-active');
	});
	$( ".action-search" ).on( "click", function() {
	  	$(".form-search-plan").toggleClass('form-search-plan-active');
	});

});