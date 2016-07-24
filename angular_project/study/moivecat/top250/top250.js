(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
    angular.module('moivecat.top250', ['ngRoute']).config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: './top250/view.html',
            controller: 'Top250Ctrl'
        });
    }]).controller('Top250Ctrl', ['$scope', function($scope){
        $scope.title='top250'
    }])
})(angular)