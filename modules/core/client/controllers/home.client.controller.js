
angular.module('core').controller('HomeController', ['$scope','$state', 'Authentication','$modal','$http',
  function ($scope,$state, Authentication,$modal,$http) {
    // This provides Authentication context.
    $scope.$state = $state;
    $scope.authentication = Authentication;
    $scope.findUsers=function(){
      $http.get('/api/users-list-home').
      success(function(data, status) {
        $scope.users=data;
        console.log(data);
      }).
      error(function(data, status) {
        console.log(data);
      });
    };

    $scope.resources = [
      'heroes.mp4',
			'heroes.webm',
      'heroes.ogv',
    ];
    $scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster';
    $scope.fullScreen = false;
    $scope.muted = true;
    $scope.zIndex = '22';
    $scope.playInfo = {};
    $scope.pausePlay = true;
    // jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);



// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(28.670637,-106.0898564));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(28.670637,-106.0898564), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#0CE45D"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 10
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#08008b"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#A10EEC"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#08008b"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#08008b"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#99FC20"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#FFF001"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#3BF325"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#3BF325"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = '/modules/core/client/img/map-marker.png';
    var myLatLng = new google.maps.LatLng(28.670637,-106.0898564);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

  }
]);
