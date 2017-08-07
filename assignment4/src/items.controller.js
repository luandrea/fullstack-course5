(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', '$stateParams'];

  function ItemsController(MenuDataService, $stateParams) {
    var ctrl = this;

    ctrl.items = MenuDataService.getItemsForCategory($stateParams.shortNameCategory);
  }

})();
