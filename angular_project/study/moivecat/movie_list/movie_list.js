(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
    angular.module('moivecat.movie_list', ['ngRoute', 'moivecat.service.http']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/:catgory/:pages', {
      templateUrl: './movie_list/view.html',
      controller: 'MovieListCtr'
    });
  }]).controller('MovieListCtr', [
  'HttpService',
  '$scope',
  '$routeParams',
  '$route',
   function(HttpService,$scope,$routeParams,$route){
        $scope.catgory=$routeParams.catgory;
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
        HttpService.jsonp('http://api.douban.com/v2/movie/'+$scope.catgory,{start:start_page,count:page_count},function(data){
            $scope.data=data.subjects;
            $scope.total=data.total;
            $scope.pages=Math.ceil($scope.total/page_count);
            switch($scope.catgory){
              case 'in_theaters':
              $scope.title="正在上映";
              break;
               case 'coming_soon':
              $scope.title="即将上映";
              break; 
              case 'top250':
              $scope.title="top250"
              break;
              default:
              $scope.title="正在加载";
              break;
            }

            
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