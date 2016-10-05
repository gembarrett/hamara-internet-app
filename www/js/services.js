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
    // getCats: function(cId) {
    //   // get the json array of category objects
    //   var cats = content.query();
    //   cats.$promise.then(function(data){
    //       // for each category object
    //       for (var i = 0; i < cats.length; i++) {
    //         // if the category matches the one we're looking for
    //         if (cats[i].cId === cId) {
    //           // return that category object
    //           console.log(cats[i]);
    //           return cats[i];
    //         }
    //       }
    //       return null;
    //     });
    //   },
      // getSubcats: function(cId) {
      //   // get the json array of category objects
      //   var subcats = content.query();
      //   var dataReturned;
      //   subcats.$promise.then(function(data){
      //       // for each category object
      //       for (var i = 0; i < subcats.length; i++) {
      //         // if the category matches the one we're looking for
      //         if (subcats[i].cId === cId) {
      //           // return that category object
      //           console.log(subcats[i].subcats);
      //           return subcats;
      //         }
      //       }
      //       return null;
      //     });
      //   }
    }
});
