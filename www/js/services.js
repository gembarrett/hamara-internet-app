angular.module('starter.services', ['ngResource'])

.factory('Content', function ($http) {
  return {
    all: function() {
      var content;
      if (language === 'en') {
        content = 'appdata/data-en.json';
        var bdy = document.getElementsByTagName('body');
        console.log(bdy[0]);
        bdy[0].classList.remove("pk-lang");
        bdy[0].classList.toggle("en-lang");
      } else {
        content = 'appdata/data-pk.json';
        var bdy = document.getElementsByTagName('body');
        console.log(bdy[0]);
        bdy[0].classList.remove("en-lang");
        bdy[0].classList.toggle("pk-lang");
      }
      return $http({
        url: content,
        method: 'GET'
      });
    },
  }
});
