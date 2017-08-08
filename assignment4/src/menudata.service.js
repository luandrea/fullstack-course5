(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService($http, ApiBasePath) {
    var service = this;

    //This service should be declared on the `data` module, *not* on the `MenuApp` module.

    service.getAllCategories = function() {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

      console.log("ho cercato le categorie");

      return response;
    }

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      });

      console.log("cerco gli elementi nella categoria: "+categoryShortName);

      return response;
    }
  }

})();
