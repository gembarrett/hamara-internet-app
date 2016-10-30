angular.module('starter.services', ['ngResource'])

.factory('ContentEN', function ($http) {
  // var content = 'appdata/data-pk.json';
  var content = 'appdata/data-en.json';
  return {
    all: function() {
      return $http({
        url: content,
        method: 'GET'
      });
    },
  }
})

.factory('ContentPK', function ($http) {
  var content = 'appdata/data-pk.json';
  return {
    all: function() {
      return $http({
        url: content,
        method: 'GET'
      });
    },
  }
});
