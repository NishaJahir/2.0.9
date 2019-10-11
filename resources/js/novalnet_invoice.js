$(document).ready( function() {
	console.log('nnnnn');

	$ (function() {
    var Months = ["January", "Febraury", "March", "April", "Jan", "Feb", "Test"];
    $("#nn_month").autocomplete({
     // source: Months
     console.log('jjj');
    });
  } );
	
	$('#nn_invoice_form').on('submit', function() {
		$('#novalnet_form_btn').attr('disabled',true);
	});
});
