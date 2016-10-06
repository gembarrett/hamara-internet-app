// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app',{
    url: '/',
    templateUrl: 'templates/splash.html'
  })

  .state('categories',{
    url: '/menu',
    templateUrl: 'templates/categories.html',
    controller: "CatsCtrl"
  })

  .state('subcategories', {
    url: '/menu/:cId',
    templateUrl: 'templates/subcategories.html',
    controller: 'SubcatsCtrl'
  })

  .state('4tab', {
    url: '/menu/:catid/:subcatid/tab',
    templateUrl: 'templates/tabs.html',
    abstract: true
  })

  .state('4tab.problem', {
    url: '/menu/:catid/:subcatid/problem',
    views: {
      'tab-problem': {
        templateUrl: 'templates/tab-problem.html',
        controller: 'ContentCtrl'
      }
    }
  })

  .state('4tab.solution', {
      cache: false,
      url: '/menu/:catid/:subcatid/solution',
      views: {
        'tab-solution': {
          templateUrl: 'templates/tab-solution.html',
          controller: 'ContentCtrl'
        }
      }
    })

    .state('4tab.tips', {
      cache: false,
      url: '/menu/:catid/:subcatid/tips',
      views: {
        'tab-tips': {
          templateUrl: 'templates/tab-tips.html',
          controller: 'ContentCtrl'
        }
      }
    })

  .state('4tab.resources', {
    cache: false,
    url: '/menu/:catid/:subcatid/resources',
    views: {
      'tab-resources': {
        templateUrl: 'templates/tab-resources.html',
        controller: 'ContentCtrl'
      }
    }
  })

  ;



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
