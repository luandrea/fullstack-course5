(function() {
    'use strict';

    angular.service('MenuDataService', MenuSearchService);



    MenuDataService.$inject = ['MenuSearchService'];

    function MenuDataService(MenuSearchService) {

    }

})();
