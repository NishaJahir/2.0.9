$(document).ready( function() {
	$( function() {
	  let current_date = new Date();
	  current_date.getFullYear();
	  var max_year = current_date.getFullYear() - 18;	  
	  var min_year = current_date.getFullYear() - 60;
	  console.log(max_year);
		 console.log(min_year);
    var year_range = [];
    
    for( var year = max_year; year >= min_year; year-- ) {				
		year_range.push('' + year + '');
	}
	
    $( "#nn_invoice_year" ).autocomplete({
      source: year_range
    });
  } );
	
	$('#nn_invoice_form').on('submit', function() {
		$('#novalnet_form_btn').attr('disabled',true);
	});
});

 function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
