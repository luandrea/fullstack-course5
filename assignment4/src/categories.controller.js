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
    var categoriesList = this;
    categoriesList.categories = response.data;
  }

})();
