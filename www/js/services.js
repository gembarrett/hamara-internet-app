angular.module('starter.services', ['ngResource'])

.factory('Content', function ($http) {
  return {
    all: function() {
      var content;
      // addLangToBody(content);
      return $http({
        url: setContent(content),
        method: 'GET'
      });
    },
  }
});
