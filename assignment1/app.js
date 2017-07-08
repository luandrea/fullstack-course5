(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.message = "";
    $scope.lunchmenu = "";

    $scope.checkLunchList = function() {

      if (!$scope.lunchmenu) {
        $scope.message = "Please enter data first";

      } else {

        var arrayOfStrings = $scope.lunchmenu.split(',')

        if (arrayOfStrings.length > 3) {
          $scope.message = "You have eaten too much.";

        } else {
          $scope.message = "Enjoy!";
        }
      }
    };

  }

})();
