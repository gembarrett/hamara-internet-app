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
    url: '/menu/:id',
    templateUrl: 'templates/subcategories.html',
    controller: 'SubcatsCtrl'
  })

  .state('tab', {
    url: '/tab',
    templateUrl: 'templates/tabs.html',
    abstract: true
  })

  .state('tab.problem', {
    url: '/problem',
    views: {
      'tab-problem': {
        templateUrl: 'templates/tab-problem.html'
      }
    }
  })

  .state('tab.solution', {
      url: '/solution',
      views: {
        'tab-solution': {
          templateUrl: 'templates/tab-solution.html'
        }
      }
    })
    .state('tab.tips', {
      url: '/tips',
      views: {
        'tab-tips': {
          templateUrl: 'templates/tab-tips.html'
        }
      }
    })

  .state('tab.resources', {
    url: '/resources',
    views: {
      'tab-resources': {
        templateUrl: 'templates/tab-resources.html'
      }
    }
  })


  // TODO: this is all kinds of wrong. You know it and I know it. Fix it.
  // .state('online', {
  //   url: '/online',
  //   views: {
  //     'tab-resources': {
  //       templateUrl: 'templates/tab-resources.html'
  //     }
  //   }
  // })



  ;



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
