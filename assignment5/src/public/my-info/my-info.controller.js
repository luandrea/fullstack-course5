(function() {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService']
  function MyInfoController(MenuService) {
    var info = this;
    info.users = MenuService.getRegisteredUserList();
  }
})();
