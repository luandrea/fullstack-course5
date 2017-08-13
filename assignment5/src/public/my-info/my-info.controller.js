(function() {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService']
  function MyInfoController(MenuService) {
    var info = this;
    info.mex = 'ciaoooo';
    info.users = MenuService.getRegisteredUserList();
    // console.info(userInfo);
    // info.userData = userInfo;
  }
})();
