angular.module('starter.controllers', [])
.controller('ParksCtrl', function ($scope, $log, $http, ParkData) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $log.info('ParksCtrl created');

  $http.get('data/data.json')
    .success(function (data, status, headers, config) {
      ParkData.initData(data);
      $scope.parks = ParkData.getParks();
    })
    .error(function (data, status, headers, config) {
      // log error
      $log.info('error' + data);
    })
})

.controller('ParkDetailCtrl', function ($scope, $stateParams, $log) {
  $log.info('ParkDetailCtrl created');
})

.controller('MapCtrl', function ($scope, $log) {
  $log.info('MapCtrl created');
});
