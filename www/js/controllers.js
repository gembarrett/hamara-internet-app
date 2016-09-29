angular.module('starter.controllers', ['starter.services'])

.controller('CatsCtrl', function($scope, Content) {
    $scope.categories = Content.query();
})

.controller('SubcatsCtrl', function($scope, $stateParams, Content) {
    $scope.subcats = Content.get({cId: $stateParams.cId});
});
