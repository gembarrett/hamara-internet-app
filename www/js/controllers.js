var language;

angular.module('starter.controllers', ['starter.services'])
.run(function($rootScope){
  $rootScope.lang;
  $rootScope.cats;
  $rootScope.subcats;
  $rootScope.chosenCat;
  $rootScope.chosenSubcat;
})

.controller('SplashCtrl', function($scope){
  $scope.$on('$ionicView.enter', function() {
    var bdy = document.getElementsByTagName('body');
    bdy[0].classList.remove("pk-lang", "en-lang");
  });
})

// list the categories
.controller('CatsCtrl', function($scope, $ionicHistory, $rootScope, Content, $state, $stateParams){
  // $scope.$on('$ionicView.beforeEnter', function() {
  //   addLangToBody(language);
  //   checkForHome($ionicHistory.currentStateName());
  // });
  $scope.$on('$ionicView.enter', function() {
    addLangToBody(language);
    $rootScope.lang = language;
    checkForHome($ionicHistory.currentStateName());
    Content.all().then(function(cats){
      $rootScope.cats = cats.data;
      $scope.cats = cats.data;
    });
  });
})


// find the subcategories
.controller('SubcatsCtrl', function($scope, $ionicHistory, $rootScope, $state, $stateParams) {
  if ($rootScope.cats != undefined) {
    $scope.$on('$ionicView.enter', function() {
      checkForHome($ionicHistory.currentStateName());
    });
    var cats = $rootScope.cats;
    var subcats = [];
    $rootScope.chosenCat = $stateParams.cId;
    $scope.cId = $stateParams.cId;
    for (var i = 0; i < cats.length; i++) {
      // if the category matches the one we're looking for
      if (cats[i].cId === $stateParams.cId){
        if ($stateParams.cId === 'support') {
          $scope.cTitle = cats[i].cTitle;
          $scope.cTitle2 = cats[i].cTitle2;
          $scope.content = cats[i].text;
          $scope.resources = cats[i].resources;
        } else {
          $scope.cTitle = cats[i].cTitle;
          $scope.cTitle2 = cats[i].cTitle2;
          $scope.subcats = cats[i].subcats;
          $rootScope.subcats = $scope.subcats;
          // return that category object
          return $scope.subcats;
        }
      }
    }
  }
  else {
    Content.all().then(function(cats){
      $rootScope.cats = cats.data;
      $scope.cats = cats.data;
      $ionicHistory.clearCache().then(function(){ $state.go('app') });
    });
  }

})

// find the subcategories
.controller('ContentCtrl', function($scope, $ionicHistory, $rootScope, $state, $stateParams) {
  $scope.$on('$ionicView.enter', function() {
    checkForHome($ionicHistory.currentStateName());
  });
  if ($rootScope.subcats === '' || $rootScope.subcats === undefined) {
    $ionicHistory.clearCache().then(function(){ $state.go('app') });
  }
  if ($state.params.subcatid != '' && $state.params.subcatid != undefined) {
    $rootScope.chosenSubcat = $state.params.subcatid;
  }
  $scope.subcatid = $rootScope.chosenSubcat;
  $scope.currentTab = $state.current.name;
  if ($rootScope.chosenCat === 'tips' || $rootScope.chosenCat === 'app' || $rootScope.chosenCat === 'report') {
    console.log('here too');
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
  }
  else if ($rootScope.chosenCat === 'support') {
    console.log('here');
    // if ($stateParams.cId === 'support') {
    //   console.log($stateParams.cId);
    //   $scope.content = $stateParams.text;
    // } else {
    //
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

function checkForHome(name){
  if (name != 'categories'){
    buttons = document.getElementsByClassName('home-button');
    for (var i = 0; i<buttons.length; i++){
      buttons[i].removeAttribute('disabled');
    }
  } else {
    buttons = document.getElementsByClassName('home-button');
    for (var i = 0; i<buttons.length; i++){
      buttons[i].setAttribute('disabled', 'true');
    }
  }
}

function setLang(lang) {
  language = lang;
}

function setContent(content) {
  if (language === 'en') {
    content = 'appdata/data-en.json';
    addLangToBody(language);
  } else {
    content = 'appdata/data-pk.json';
    addLangToBody(language);
  }
  return content;
}

function addLangToBody(language){
  var bdy = document.getElementsByTagName('body');
  // if english is selected
  if (language === 'en') {
    if (!(bdy[0].classList.contains("en-lang"))) {
      // attach it
      bdy[0].classList.remove("pk-lang");
      bdy[0].classList.add("en-lang");
    }
  } else {
    if (!(bdy[0].classList.contains("pk-lang"))) {
      bdy[0].classList.remove("en-lang");
      bdy[0].classList.add("pk-lang");
    }
  }
}
