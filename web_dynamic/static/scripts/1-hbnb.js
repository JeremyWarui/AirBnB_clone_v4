const $ = window.$;
$(document).ready(function () {
  const amenities = {};

  $('input[type=checkbox]').change(function () {
    // check if selected and add to amneities object
    // else remove form amenities list
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenities[$(this).attr('data-id')];
    }
    // update h4 with the list of amenities selected
    if (Object.keys(amenities).length > 0) {
      $('div.amenities h4').text(Object.values(amenities).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp');
    }
  });
});

// // This script should be executed only when the DOM is loaded
// $(document).ready(function () {

//   // Initialize an empty object to store the selected amenities
//   const amenities = {};

//   // Listen for changes on each input checkbox tag
//   $('input[type=checkbox]').change(function () {
//     // Check if the checkbox is checked
//     if ($(this).prop('checked')) {
//       amenities[$(this).attr('data-id')] = $(this).attr('data-name');
//     } else if (!$(this).prop('checked')) {
//       delete amenities[$(this).attr('data-id')];
//     }
//     // Update the h4 tag inside the div Amenities with the list of Amenities checked
//     if (Object.keys(amenities).length === 0) {
//         $('div.amenities h4').html('&nbsp');
//     } else {
//       $('div.amenities h4').text(Object.values(amenities).join(', '));
//     }
//   });
// });
