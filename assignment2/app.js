(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var toBuyController = this;

    toBuyController.items = ShoppingListCheckOffService.getToBuyList();

    toBuyController.buyItem = function (itemName, quantity) {
      ShoppingListCheckOffService.buyItem(itemName, quantity);
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    var alreadyBoughtController = this;

    alreadyBoughtController.items = ShoppingListCheckOffService.getBoughtList();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyList = [{name:'cookies',quantity:10}, {name:'cookies',quantity:10}];
    var alreadyBoughtList = [{name:'cookies',quantity:10}];

    service.buyItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      
      // insert in bought
      alreadyBoughtList.push(item);

      // remove from toBuy
      var itemIndex = toBuyList.indexOf(item);
      toBuyList.splice(itemIndex, 1);
    };

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return alreadyBoughtList;
    };
  }

})();
