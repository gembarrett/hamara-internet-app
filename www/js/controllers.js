angular.module('starter.controllers', ['starter.services'])

// list the categories
.controller('CatsCtrl', function($scope, Content){
  $scope.cats = Content.all();
  // $scope.categories = Content.query();
})

// .controller('CatsCtrl', function($scope, Content) {
//     $scope.subcats = Content.query();
// })

// find the subcategories
.controller('SubcatsCtrl', function($scope, $stateParams, Content) {
  // $scope.cats = Content.getCats($stateParams.cId);
    $scope.subcats = Content.getSubcats($stateParams.cId);
});

// .controller('getSubcatsCtrl', function($scope, $stateParams, Content){
//   $scope.content = Content.getSubcats($stateParams.cId);
// })
