angular.module('starter.services', ['ngResource'])

.factory('Content', function ($resource, $http) {
  var content = $resource('../data.json');
  return {
    all: function() {
      return content.query();
    },
    get: function(cId) {
      // get the json array of category objects
      var cats = content.query();
      cats.$promise.then(function(data){
          // for each category object
          for (var i = 0; i < cats.length; i++) {
            // if the category matches the one we're looking for
            if (cats[i].cId === cId) {
              // return that category object
              console.log(cats[i]);
              return cats[i];
            }
          }
          return null;
        });
      }
    }
});
