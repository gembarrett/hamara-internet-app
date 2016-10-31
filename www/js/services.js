angular.module('starter.services', ['ngResource'])

.factory('Content', function ($http) {
  return {
    all: function() {
      var content;
      if (language === 'en') {
        content = 'appdata/data-en.json';
      } else {
        content = 'appdata/data-pk.json';
      }
      return $http({
        url: content,
        method: 'GET'
      });
    },
  }
});
