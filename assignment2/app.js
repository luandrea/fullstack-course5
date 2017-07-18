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

    toBuyController.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    var alreadyBoughtController = this;

    alreadyBoughtController.items = ShoppingListCheckOffService.getBoughtList();

    console.log($scope);
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of items to buy
    var toBuyList = [{name:'beer',quantity:10}, {name:'cookies',quantity:10},
        {name:'candies',quantity:10}, {name:'tigers',quantity:10},
        {name:'books',quantity:10}, {name:'ice creams',quantity:10}];

    // List of items already bought
    var alreadyBoughtList = [];

    service.buyItem = function (index) {
      
      if (index > -1 && index < toBuyList.length) {
        // insert in bought
        alreadyBoughtList.push(toBuyList[index]);

        // remove from toBuy      
        toBuyList.splice(index, 1);
      
      } else {
        alert("Object not found!");
      }
    };

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return alreadyBoughtList;
    };
  }

})();
