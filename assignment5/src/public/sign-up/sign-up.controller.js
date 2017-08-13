(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var reg = this;
  reg.message = '';

  reg.submit = function () {
    console.log(reg.user.favouriteDish);

/*

     If the server returns an error, you will know that the item name specified is not valid.
     If that s the case, display a message next to the favorite choice saying `No such menu number exists`.
     (See bonus for more)
     */

     var favDish = MenuService.getMenuItem(reg.user.favouriteDish)
     .catch(function(error) {
       console.log("Something went terribly wrong.");
       message = 'No such menu number exists';
     });

     console.log(favDish);

    reg.completed = true;
  };
}

})();
