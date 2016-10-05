angular.module('starter.services', ['ngResource'])

.factory('Content', function ($http) {
  var content = '../data.json';
  return {
    all: function() {
      return $http({
        url: content,
        method: 'GET'
      });
    },
  }
});
