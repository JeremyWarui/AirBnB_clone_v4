// This script should be executed only when the DOM is loaded
$(document).ready(function () {

  // Initialize an empty object to store the selected amenities
  const amenities = {};

  // Listen for changes on each input checkbox tag
  $('input[type=checkbox]').change(function () {
    // Check if the checkbox is checked
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenities[$(this).attr('data-id')];
    }
    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    if (Object.keys(amenities).length === 0) {
        $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenities).join(', '));
    }
  });
  // Request the API status every 5 seconds
  setInterval(function() {
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
});
