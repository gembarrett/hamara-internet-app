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
        $scope.thisSubcat = $rootScope.subcats[i].sTitle;
        switch ($scope.currentTab) {
          case '2tab.how-who':
            $scope.content = $rootScope.subcats[i].how;
            break;
          case '2tab.where-contact':
            $scope.resources = $rootScope.subcats[i].where;
            break;
          default:
            console.log('idk wtf is going on');
        }
      }
    }
  } else if ($rootScope.chosenCat === 'tips') {
    // for every subcat
    for (var i=0; i<$rootScope.subcats.length; i++){
      // if the subcat matches the selected one
      if ($rootScope.subcats[i].sId === $scope.subcatid){
        // save title and content to variables
        $scope.thisSubcat = $rootScope.subcats[i].sTitle;
        $scope.content = $rootScope.subcats[i].text;
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
            break;
          default:
            console.log('idk wtf is going on');
        }
      }
    }
  }
});
