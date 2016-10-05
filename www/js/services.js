angular.module('starter.services', ['ngResource'])

.factory('Content', function ($resource, $http) {
  return $resource('../data.json');
});
