(function() {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to index if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider

      // Home
      .state('home', {
        url: '/',
        templateUrl: 'src/home.html'
      })

      // category List
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          response: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      // item List
      .state('items', {
        url: '/item-list/{shortNameCategory}',
        templateUrl: 'src/items.template.html',
        controller: 'ItemDetailController as itemDetail',
        resolve: {
          response: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortNameCategory);
          }]
        }
      });
  }


})();
