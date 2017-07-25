(function () {
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

  var searchTerm = "";

  ctrl.narrowItDown = function (searchTerm) {
    ctrl.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    console.log(ctrl.found);
  };

  ctrl.onRemove = function (index) {
    // rimuovo elemento con index da ctrl.found
    ctrl.found.splice(index, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  var items = [];

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    promise.then(function (response) {
      items = [];
      var list = response.data.menu_items;

      for (var i = 0; i < list.length; i++) {
        var name = list[i].name;
        if (name.toLowerCase().indexOf(searchTerm) !== -1) {
          items.push(list[i]);
        }
      }

      console.log(items);
    })
    .catch(function (error) {
      console.log(error);
    })

    return items;
  };

}

})();