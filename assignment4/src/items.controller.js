(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  // ItemsController.$inject = ['MenuDataService', '$stateParams'];
  //
  // function ItemsController(MenuDataService, $stateParams) {
  //   var ctrl = this;
  //
  //   ctrl.items = MenuDataService.getItemsForCategory($stateParams.shortNameCategory);
  //   console.log(ctrl.items.length);
  // }

  ItemsController.$inject = ['response'];

  function ItemsController(response) {
    var ctrl = this;
    console.log("sono nel ItemsController");
    console.log(response.data.menu_items.length);
    ctrl.items = response.data.menu_items;
  }

})();
