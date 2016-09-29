angular.module('starter.services', ['ngResource'])

.factory('Content', function ($resource) {
  return $resource('../data.json');
});
