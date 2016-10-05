angular.module('starter.controllers', ['starter.services'])


.controller('CatsCtrl', function($scope, Content){
  $scope.cats = Content.all();
  // $scope.categories = Content.query();
})

// .controller('CatsCtrl', function($scope, Content) {
//     $scope.subcats = Content.query();
// })

.controller('SubcatsCtrl', function($scope, $stateParams, Content) {
  console.log('called');
  $scope.cats = Content.get($stateParams.id);
    // $scope.subcats = Content.query();
    // console.log($scope.subcats);
});
