angular.module('starter.controllers', ['starter.services'])


.controller('DataCtrl', function($scope, Content){
  $scope.categories = Content.query();
})

.controller('CatsCtrl', function($scope, Content) {
    $scope.categories = Content.query();
})

.controller('SubcatsCtrl', function($scope, $stateParams, Content) {
    $scope.subcats = Content.query();
    console.log($scope.subcats);
});
