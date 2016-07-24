(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
    angular.module('moivecat.in_theaters', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/in_theaters', {
      templateUrl: './in_theaters/view.html',
      controller: 'In_TheatersCtrl'
    });
  }]).controller('In_TheatersCtrl', ['$scope', function($scope){
        $scope.title='正在sdfs上映'
    }])
})(angular)