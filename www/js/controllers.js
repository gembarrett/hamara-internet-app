angular.module('starter.controllers', ['starter.services'])


.controller('CatsCtrl', function($scope, Content){
  $scope.cats = Content.all();
  // $scope.categories = Content.query();
})

// .controller('CatsCtrl', function($scope, Content) {
//     $scope.subcats = Content.query();
// })

.controller('SubcatsCtrl', function($scope, $stateParams, Content) {
  $scope.cats = Content.get($stateParams.cId);
});
