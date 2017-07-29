(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    //ctrl.searchTerm = "";

    ctrl.narrowItDown = function(searchTerm) {
      ctrl.found = [];
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm.toLowerCase());
      promise.then(function(foundItems) {
        ctrl.found = foundItems;
      });
    };

    ctrl.onRemove = function(myindex) {
      // rimuovo elemento con index da ctrl.found
      var removed = ctrl.found.splice(myindex.index, 1);
    };
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];

  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    var items = [];

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(response) {
        // process result and only keep items that match
        var foundItems = response.data.menu_items;

        for (var i = 0; i < foundItems.length; i++) {
          var name = foundItems[i].name;
          if (name.toLowerCase().indexOf(searchTerm) !== -1) {
            items.push(foundItems[i]);
          }
        }

        // return processed items
        return items;
      });
    }

    service.getMatchedMenuItemsLUCA = function(searchTerm) {
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

      return promise.then(function(response) {

          items = [];
          var list = response.data.menu_items;

          for (var i = 0; i < list.length; i++) {
            var name = list[i].name;
            if (name.toLowerCase().indexOf(searchTerm) !== -1) {
              items.push(list[i]);
            }
          }

          console.log(items);
          return items;
        })
        .catch(function(error) {
          console.log(error);
        });

    };

  }

})();
