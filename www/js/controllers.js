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
.controller('SubcatsCtrl', function($scope, $ionicHistory, $rootScope, $state, $stateParams, Content) {
  if ($rootScope.cats != undefined) {
    var cats = $rootScope.cats;
    var subcats = [];
    $rootScope.chosenCat = $stateParams.cId;
    $scope.cId = $stateParams.cId;
    for (var i = 0; i < cats.length; i++) {
      // if the category matches the one we're looking for
      if (cats[i].cId === $stateParams.cId){
        $scope.cTitle = cats[i].cTitle;
        $scope.subcats = cats[i].subcats;
        $rootScope.subcats = $scope.subcats;
        // return that category object
        return $scope.subcats;
      }
    }
  } else {
    Content.all().then(function(cats){
      $rootScope.cats = cats.data;
      $scope.cats = cats.data;
      $ionicHistory.clearCache().then(function(){ $state.go('app') });
    });
  }

})

// find the subcategories
.controller('ContentCtrl', function($scope, $ionicHistory, $rootScope, $state, $stateParams, Content) {
  if ($rootScope.subcats === '' || $rootScope.subcats === undefined) {
    $ionicHistory.clearCache().then(function(){ $state.go('app') });
  }
  if ($state.params.subcatid != '' && $state.params.subcatid != undefined) {
    $rootScope.chosenSubcat = $state.params.subcatid;
  }
  $scope.subcatid = $rootScope.chosenSubcat;
  $scope.currentTab = $state.current.name;
  if ($rootScope.chosenCat === 'report') {
    for (var i=0; i<$rootScope.subcats.length; i++){
      if ($rootScope.subcats[i].sId === $scope.subcatid){
        switch ($scope.currentTab) {
          case '2tab.how-who':
            $scope.content = $rootScope.subcats[i].how;
            break;
          case '2tab.where-contact':
            $scope.content = $rootScope.subcats[i].where;
            break;
          default:
            console.log('idk wtf is going on');
        }
      }
    }
  } else {
    for (var i=0; i<$rootScope.subcats.length; i++){
      if ($rootScope.subcats[i].sId === $scope.subcatid){
        $scope.thisSubcat = $rootScope.subcats[i].sTitle;
        switch ($scope.currentTab) {
          case '4tab.problem':
            $scope.content = $rootScope.subcats[i].problem;
            break;
          case '4tab.solution':
            $scope.content = $rootScope.subcats[i].solution;
            break;
          case '4tab.tips':
            $scope.content = $rootScope.subcats[i].tips;
            break;
          case '4tab.resources':
            $scope.resources = $rootScope.subcats[i].resources;
            console.log($scope.resources);
            break;
          default:
            console.log('idk wtf is going on');
        }
      }
    }
  }
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
