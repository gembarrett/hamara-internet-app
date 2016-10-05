angular.module('starter.services', ['ngResource'])

.factory('Content', function ($resource, $http) {
  var content = $resource('../data.json');
  return {
    all: function() {
      return content.query();
    },
    get: function(id) {
      console.log('get');
      // get the json array of category objects
      var cats = content.query();
      // for each category object
      for (var i = 0; i < cats.length; i++) {
        // if the category matches the one we're looking for
        if (cats[i].id === parseInt(id)) {
          // return that category object
          return cats[i];
        }
      }
      return null;
    }

  }
});
