(function() {
  "use strict";

  // vedere:
  // https://github.com/ramizebian/angular-5/blob/master/src/public/signup/signup.controller.js

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];

  function SignUpController(MenuService) {
    var reg = this;

    reg.submit = function() {
      MenuService.getMenuItem(reg.user.favouriteDish)
        .then(function(response) {

          console.log("RegUserList1: ",MenuService.getRegisteredUserList());

          //var regUser = {reg.user, response.data}
          var regUser = angular.extend({}, reg.user, response.data);
          console.log("RegUser: ", regUser);

          MenuService.addRegisteredUser(regUser);

          console.log("RegUserList2: ",MenuService.getRegisteredUserList());

          reg.complete = true;
        })
        .catch(function(error) {
          reg.dishNotFound = true;
        });
    }
  }

})();
