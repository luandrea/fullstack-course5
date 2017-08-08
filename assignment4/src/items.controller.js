(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['response'];

  function ItemsController(response) {
    var ctrl = this;
    ctrl.items = response.data.menu_items;
  }

})();
