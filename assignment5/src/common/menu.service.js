(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', 'RealSitePath'];
function MenuService($http, ApiPath, RealSitePath) {
  var service = this;

  var registeredUserList = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    return $http.get(RealSitePath + '/menu_items/' + shortName + '.json');
  };

  service.addRegisteredUser = function(user) {

    registeredUserList.push(user);
    console.log(registeredUserList);
  };

  service.getRegisteredUserList = function() {
    console.log(registeredUserList);
    return registeredUserList;
  };

}

})();
