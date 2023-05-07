const $ = window.$;
// This script should be executed only when the DOM is loaded
$(document).ready(function () {
    // Initialize an empty object to store the selected amenities
    const amenities = {};

    // Listen for changes on each input checkbox tag
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
    $.get("http://0.0.0.0:5001/api/v1/status/", function (response) {
        if (response.status === "OK") {
            $("div#api_status").addClass("available");
        } else {
            $("div#api_status").removeClass("available");
        };
    });

    // }, 'application/json');
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://0.0.0.0:5001/api/v1/places_search",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "processData": false,
        "data": "{}"
    };

    $.ajax(settings).done(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            $("section.places").append('<article><div class="title_box"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest">' + data[i].max_guest + ' Guest</div><div class="number_rooms">' + data[i].number_rooms + ' Bedroom</div><div class="number_bathrooms">' + data[i].number_bathrooms + ' Bathroom</div></div></article>');
        }
    });

    // Request the API status every 5 seconds
    // setInterval(function () {
    //   $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    //     if (data.status === 'OK') {
    //       $('div#api_status').addClass('available');
    //     } else {
    //       $('div#api_status').removeClass('available');
    //     }
    //   });
    // });
});
