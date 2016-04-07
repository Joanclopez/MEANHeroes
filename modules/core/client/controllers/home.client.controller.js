'use strict';

angular.module('core').controller('HomeController', ['$scope','$state', 'Authentication','$modal','$http',
  function ($scope,$state, Authentication,$modal,$http) {
    // This provides Authentication context.
     $scope.dt = new Date(2016, 4, 7);
    $scope.$state = $state;
    $scope.authentication = Authentication;
    $scope.resources = [
      'Smash.mp4',
			'Smash.webm'
    ];
    $scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster';
    $scope.fullScreen = false;
    $scope.muted = true;
    $scope.zIndex = '22';
    $scope.playInfo = {};
    $scope.pausePlay = true;

    $scope.open = function (size) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: function ($scope, $modalInstance) {
          $scope.ok = function () {
            $modalInstance.close();
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
      });

      modalInstance.result.then(function () {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
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
    }
  }
]);
