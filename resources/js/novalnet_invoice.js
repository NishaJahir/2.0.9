$(document).ready( function() {
	$(document).click (function() {
    var Months = ["January", "Febraury", "March", "April", "Jan", "Feb", "Test"];
    $( "#nn_month" ).autocomplete({
      source: Months
    });
  } );
	
	$('#nn_invoice_form').on('submit', function() {
		$('#novalnet_form_btn').attr('disabled',true);
	});
});
