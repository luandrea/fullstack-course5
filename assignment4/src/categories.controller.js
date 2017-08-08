(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  // CategoriesController.$inject = ['MenuDataService'];
  //
  // function CategoriesController(MenuDataService) {
  //   var ctrl = this;
  //
  //   ctrl.categories = MenuDataService.getAllCategories();
  // }

  CategoriesController.$inject = ['response'];

  function CategoriesController(response) {
    var categoriesCtrl = this;
    console.log("sono nel categoriesCtrl");
    categoriesCtrl.ciao="areo!!<"
    console.log(response.data.length);
    categoriesCtrl.categories = response.data;
  }

})();
