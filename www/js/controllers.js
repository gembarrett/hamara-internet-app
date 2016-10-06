angular.module('starter.controllers', ['starter.services'])
.run(function($rootScope){
  $rootScope.cats;
  $rootScope.subcats;
  $rootScope.chosenCat;
  $rootScope.chosenSubcat;
})

// list the categories
.controller('CatsCtrl', function($scope, $rootScope, Content){
  Content.all().then(function(cats){
    $rootScope.cats = cats.data;
    $scope.cats = cats.data;
  });
})

// find the subcategories
.controller('SubcatsCtrl', function($scope, $rootScope, $state, $stateParams, Content) {
  if ($rootScope.cats != undefined) {
    var cats = $rootScope.cats;
    var subcats = [];
    $rootScope.chosenCat = $stateParams.cId;
    $scope.cId = $stateParams.cId;
    for (var i = 0; i < cats.length; i++) {
      // if the category matches the one we're looking for
      if (cats[i].cId === $stateParams.cId){
        $scope.subcats = cats[i].subcats;
        console.log(subcats);
        // return that category object
        return $scope.subcats;
      }
    }
  } else {
    Content.all().then(function(cats){
      $rootScope.cats = cats.data;
      $scope.cats = cats.data;
      $state.go('categories');
    });
  }

})

// find the subcategories
.controller('ContentCtrl', function($scope, $rootScope, $state, $stateParams, Content) {
  if ($state.params.subcatid != '' && $state.params.subcatid != undefined) {
    $rootScope.chosenSubcat = $state.params.subcatid;
  }
  $scope.subcatid = $rootScope.chosenSubcat;

  // console.log($rootScope.cats);
  // if ($rootScope.cats != undefined) {
  //   var subcats = $rootScope.subcats;
  //   console.log(subcats);
  //   // for (var i = 0; i < subcats.length; i++) {
  //   //   // if the category matches the one we're looking for
  //   //   if (cats[i].cId === $stateParams.cId){
  //   //     $scope.subcats = cats[i].subcats;
  //   //     console.log(subcats);
  //   //     // return that category object
  //   //     return $scope.subcats;
  //   //   }
  //   // }
  // } else {
  //   Content.all().then(function(cats){
  //     $rootScope.cats = cats.data;
  //     $scope.cats = cats.data;
  //     $state.go('categories');
  //   });
  // }

})



;
