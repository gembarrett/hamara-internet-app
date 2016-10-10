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
  // if ($rootScope.chosenCat === 'report' || $rootScope.chosenCat === 'support') {
  //   for (var i=0; i<$rootScope.subcats.length; i++){
  //     if ($rootScope.subcats[i].sId === $scope.subcatid){
  //       $scope.thisSubcat = $rootScope.subcats[i].sTitle;
  //       $scope.thisCat = $rootScope.chosenCat;
  //       if ($scope.currentTab === '2tab.how-who'){
  //         if ($rootScope.chosenCat === 'report'){
  //           $scope.content = $rootScope.subcats[i].how;
  //         } else {
  //           $scope.content = $rootScope.subcats[i].who;
  //         }
  //       } else {
  //         if ($rootScope.chosenCat === 'report'){
  //           $scope.resources = $rootScope.subcats[i].where;
  //         } else {
  //           $scope.resources = $rootScope.subcats[i].contact;
  //         }
  //       }
  //     }
  //   }
  // } else
  if ($rootScope.chosenCat === 'tips' || $rootScope.chosenCat === 'app' || $rootScope.chosenCat === 'report' || $rootScope.chosenCat === 'support') {
    // for every subcat
    for (var i=0; i<$rootScope.subcats.length; i++){
      // if the subcat matches the selected one
      if ($rootScope.subcats[i].sId === $scope.subcatid){
        // save title and content to variables
        $scope.thisSubcat = $rootScope.subcats[i].sTitle;
        $scope.content = $rootScope.subcats[i].text;
        $scope.resources = $rootScope.subcats[i].resources;
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
