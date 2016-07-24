(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
    angular.module('moivecat.coming_soon', ['ngRoute']).config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/coming_soon', {
            templateUrl: './coming_soon/view.html',
            controller: 'Coming_soonCtrl'
        });
    }]).controller('Coming_soonCtrl', ['$scope', function($scope){
        $scope.title='即将上映'
    }])
})(angular)