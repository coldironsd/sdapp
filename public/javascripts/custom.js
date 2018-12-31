$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$( document ).ready(function() {
	$('#whendate').fdatepicker({
		format: 'mm-dd-yyyy hh:ii',
		disableDblClickSelection: true,
		leftArrow:'<<',
		rightArrow:'>>',
		closeIcon:'X',
		closeButton: false,
		pickTime: true
	});
});

$( document ).ready(function() {
	$.validate({
	    modules : 'date'
	  });
});

$(document).ready(function() {
  
  /*************************** from where input field **********************************/
	var frominput = document.getElementById('pac-fromwhere');
	var autocomplete = new google.maps.places.Autocomplete(frominput);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);
        
    autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }


          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
        });

});

$(document).ready(function() {
  
  /*************************** to where input field **********************************/
	var toinput = document.getElementById('pac-towhere');
	var autocomplete2 = new google.maps.places.Autocomplete(toinput);

    // Set the data fields to return when the user selects a place.
    autocomplete2.setFields(
        ['address_components', 'geometry', 'icon', 'name']);
        
    autocomplete2.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place2 = autocomplete.getPlace();
          
          if (!place2.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place2.name + "'");
            return;
          }


          var address2 = '';
          if (place2.address_components) {
            address2 = [
              (place2.address_components[0] && place2.address_components[0].short_name || ''),
              (place2.address_components[1] && place2.address_components[1].short_name || ''),
              (place2.address_components[2] && place2.address_components[2].short_name || '')
            ].join(' ');
          }
        });

});