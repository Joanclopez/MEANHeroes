
angular.module('core').controller('HomeController', ['$scope','$state', 'Authentication','$modal','$http', '$window',
  function ($scope,$state, Authentication,$modal,$http,$window) {
    // This provides Authentication context.
    $scope.$state = $state;
    $scope.authentication = Authentication;
    // OAuth provider request
    $scope.callOauthProvider = function (url) {
      if ($state.previous && $state.previous.href) {
        url += '?redirect_to=' + encodeURIComponent($state.previous.href);
      }

      // Effectively call OAuth authentication route:
      $window.location.href = url;
    };
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


  }
]);
