(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
   var data={}
    angular.module('moivecat.in_theaters', ['ngRoute', 'moivecat.service.http']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/in_theaters', {
      templateUrl: './in_theaters/view.html',
      controller: 'In_TheatersCtrl'
    });
  }]).controller('In_TheatersCtrl', ['HttpService','$scope', function(HttpService,$scope){
        $scope.loading=true;
        $scope.title='正在热映';
        $scope.total=0;
        HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters',{},function(data){
          $scope.data=data.subjects;
          $scope.total=data.subjects.length;
          $scope.loading=false;
           $scope.$apply();
        })
        
    }])
})(angular)