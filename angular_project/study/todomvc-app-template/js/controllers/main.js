(function(angular){
    'use strict';
    var controllers=angular.module('app.controllers.main',['app.services.main']);
    controllers.controller('mainCtrl', ['$scope','$routeParams','$route','MainService', function ($scope,$routeParams,$route,MainService) {
        //文本框需要一个模型
        $scope.task="";
        //任务列表
        $scope.tasks=MainService.getTasks();
        $scope.addTask=function(){
            if(!$scope.task){
                return;
            }
           MainService.addTask($scope.task);
            $scope.task="";

        };
        $scope.deleteTask=function(taskId){
            MainService.deleteTask(taskId);
        };
        //也可以这样写。因为两个函数的参数一致
        $scope.deleteCompleted=function(){
            $scope.tasks=MainService.deleteCompleted();
        };
        //该函数一定要有返回值
        $scope.isOk=MainService.isOk;
        //当前正在编辑元素的坐标
        $scope.current_index=-1;
        $scope.isEdit=function(taskId){
            $scope.current_index=taskId;
        };
         $scope.save=function(taskId){
            $scope.current_index=-1;
        };
        var now=true;
        $scope.checkAll=MainService.checkAll;

        $scope.check=MainService.check;
        //状态筛选
        $scope.selector={};
        var sec =$routeParams.sec;
        //console.log(sec)
        switch (sec){
             case 'active':
             $scope.selector={status:false};
             break;
             case 'all':
             $scope.selector={};
             break;
             case 'completed':
             $scope.selector={status:true};
             break;
             default:
            // $route.updateParams({status:''});
            console.log(sec)
             $scope.selector ={}
             break;
        }
        //console.log($location.)
    }]);
    


})(angular)