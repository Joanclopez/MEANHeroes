'use strict';

angular.module('core').controller('HomeController', ['$scope','$state', 'Authentication','$modal','$http',
  function ($scope,$state, Authentication,$modal,$http) {
    // This provides Authentication context.
     $scope.dt = new Date(2016, 4, 7);
    $scope.$state = $state;
    $scope.authentication = Authentication;

    if ($scope.authentication.user) {
      if (!$scope.authentication.user.smash4.register&&!$scope.authentication.user.smashMelee.register) {
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'modalSelectTournament.html',
          controller: function ($scope, $modalInstance,Users,Authentication) {
            $scope.user=Authentication.user;
            console.log($scope.user.smash4);
            $scope.smash4Register=$scope.user.smash4.register;
            $scope.smashMeleeRegister=$scope.user.smashMelee.register;
            $scope.ok = function () {
                $scope.user.smash4.register=$scope.smash4Register;
                $scope.user.smashMelee.register=$scope.smashMeleeRegister;
              var user = new Users($scope.user);

              user.$update(function (response) {
                alert('Tu registro fue guardado, recuerda pagar tu inscripción');
                $scope.success = true;
                Authentication.user = response;
              }, function (response) {
                $scope.error = response.data.message;
              });
              $modalInstance.close();
            };
            $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
            };
          },
        });

        modalInstance.result.then(function () {
        }, function () {
        });      }
    }
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

    $scope.open = function () {
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
      });
    };

    $scope.openPlatformSelect = function () {
      console.log('entro');
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'modalSelectTournament.html',
        controller: function ($scope, $modalInstance,Users,Authentication) {
          $scope.user=Authentication.user;
          console.log($scope.user.smash4);
          $scope.smash4Register=$scope.user.smash4.register;
          $scope.smashMeleeRegister=$scope.user.smashMelee.register;
          $scope.ok = function () {
              $scope.user.smash4.register=$scope.smash4Register;
              $scope.user.smashMelee.register=$scope.smashMeleeRegister;
            var user = new Users($scope.user);

            user.$update(function (response) {
              alert('Tu registro fue guardado, recuerda pagar tu inscripción');
              $scope.success = true;
              Authentication.user = response;
            }, function (response) {
              $scope.error = response.data.message;
            });
            $modalInstance.close();
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
      });

      modalInstance.result.then(function () {
      }, function () {
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
    };
  }
]);
