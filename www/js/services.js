angular.module('starter.services', ['ngResource'])

.factory('Content', function ($http) {
  return {
    all: function() {
      var content;
      console.log('content call');
      return $http({
        url: setContent(content),
        method: 'GET'
      });
    },
  }
});
