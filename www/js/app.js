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

  .state('splash', {
    url: '/',
    templateUrl: 'templates/splash.html'
  })

  .state('main', {
    url: '/main',
    templateUrl: 'templates/category-display.html',
    controller: 'DataCtrl'
  })

  .state('tab', {
    url: '/main/tab',
    templateUrl: 'templates/tabs.html',
    abstract: true
  })

  .state('tab.problem', {
    url: '/main/{categoryId}/problem',
    views: {
      'tab-problem': {
        templateUrl: 'templates/tab-problem.html'
      }
    }
  })

  .state('tab.solution', {
      url: '/main/{categoryId}/solution',
      views: {
        'tab-solution': {
          templateUrl: 'templates/tab-solution.html'
        }
      }
    })
    .state('tab.tips', {
      url: '/main/{categoryId}/tips',
      views: {
        'tab-tips': {
          templateUrl: 'templates/tab-tips.html'
        }
      }
    })

    .state('tab.resources', {
      url: '/main/{categoryId}/resources',
      views: {
        'tab-resources': {
          templateUrl: 'templates/tab-resources.html'
        }
      }
    })

    // TODO: find a better way of doing this
    .state('content.subcat', {
      url: '/main/online',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('online', {
      url: '/main/online',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('devices', {
      url: '/main/devices',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('identity', {
      url: '/main/identity',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('comms', {
      url: '/main/comms',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('space', {
      url: '/main/space',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('report', {
      url: '/main/report',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('tips', {
      url: '/main/tips',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('about', {
      url: '/main/about',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

    .state('support', {
      url: '/main/support',
      templateUrl: 'templates/subcategory-display.html',
      controller: 'SubCatCtrl'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
