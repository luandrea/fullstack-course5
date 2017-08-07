(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService(MenuDataService) {
    var service = this;

    //This service should be declared on the `data` module, *not* on the `MenuApp` module.

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
    }

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      });
    }
  }

})();
