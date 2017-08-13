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

          var regUser = {user: reg.user, menuItem: response.data}
          MenuService.addRegisteredUser(regUser);
          reg.complete = true;
          
        })
        .catch(function(error) {
          reg.dishNotFound = true;
        });
    }
  }

})();
