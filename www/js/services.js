angular.module('starter.services', ['ngResource'])

.factory('Content', function ($http) {
  var content = 'appdata/data.json';
  return {
    all: function() {
      return $http({
        url: content,
        method: 'GET'
      });
    },
  }
});
