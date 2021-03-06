(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
    angular.module('moivecat.in_theaters', ['ngRoute', 'moivecat.service.http']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/in_theaters/:pages', {
      templateUrl: './in_theaters/view.html',
      controller: 'In_TheatersCtrl'
    });
  }]).controller('In_TheatersCtrl', [
  'HttpService',
  '$scope',
  '$routeParams',
  '$route',
   function(HttpService,$scope,$routeParams,$route){
        var page_count=10;
        //当前页
        var currentPage=parseInt($routeParams.pages);
        //开始页码
        var start_page=(currentPage-1)*page_count;
        //多少页面
        $scope.pages=0;
        $scope.loading=true;
        $scope.title='';
        $scope.total=0;
        $scope.currentPage=currentPage;
        HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters',{start:start_page,count:page_count},function(data){
            $scope.data=data.subjects;
            $scope.total=data.total;
            $scope.pages=Math.ceil($scope.total/page_count);
            $scope.title=""
            $scope.loading=false;
             $scope.$apply();
          });
        $scope.goPage=function(page){
          if(page<=$scope.pages&&page>=1){
             $route.updateParams({pages:page})
          }
        }
              
    }])
})(angular)