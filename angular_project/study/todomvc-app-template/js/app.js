(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
    /**
    * todomvc Module
    *
    * Description
    */
    var todoMvc=angular.module('todoMvc', []);
    todoMvc.controller('mainCtrl', ['$scope','$location', function ($scope,$location) {
        //文本框需要一个模型
        $scope.task="";
        //任务列表
        $scope.tasks=[];
        $scope.addTask=function(){
            if(!$scope.task){
                return;
            }
            $scope.tasks.push({id:new Date().getTime(),name:$scope.task,status:false})
            $scope.task="";

           // $scope.tasks[$scope.tasks.length]={id:new Date().getTime(),name:$scope.task,status:false}
        };
        $scope.deleteTask=function(taskId){
            angular.forEach($scope.tasks, function(task,index){
                if(taskId===task.id){
                     $scope.tasks.splice(index, 1)
                }
                //console.log(v.id);
                //console.log(task)
            })
        };
        $scope.deleteCompleted=function(){
            // console.info(i)
            var newTasks=[];
            angular.forEach($scope.tasks,function(task,index){
                //这样删除有问题。因为删除一个后数组长度会变化不能用这样方式删除
                // if(task.status){
                //     console.log(index)
                //     $scope.tasks.splice(index,1)
                // }
                if(!task.status){
                    newTasks.push(task)
                }
                
            })
            $scope.tasks=newTasks;
        };
        //该函数一定要有返回值
        $scope.isOk=function(){
            //这样写有问题吧
            // angular.forEach($scope.tasks, function(task,index){
            //     if(task.status){
            //         console.log(task)
            //         return true;
            //     }
            // })
            for(var i=0;i<$scope.tasks.length;i++){
                if($scope.tasks[i].status){
                    return true;
                }
            }
            return false;
        };
        //当前正在编辑元素的坐标
        $scope.current_index=-1;
        $scope.isEdit=function(taskId){
            $scope.current_index=taskId;
        };
         $scope.save=function(taskId){
            $scope.current_index=-1;
        };
        var now=true;
        $scope.checkAll=function(){
            for (var i = 0; i < $scope.tasks.length; i++) {
                $scope.tasks[i].status=now;
            }
            now=!now;
        };
        // $scope.$watch('checkAll', function(new,old){
        //     angular.forEach($scope.tasks, function(){
        //         $scope.task.status=new;
        //     })
        // })
        // 
        //状态筛选
 
        //点击事件不合适 有dom 操作
        //拿到锚点值  
        var path=$location.path();
        
       $scope.$location=$location;
        $scope.$watch('$location.path()',function(now,old){
            switch (now){
                case '/active':
                 $scope.selector={status:false}
                break;
                case '/completed':
                $scope.selector={status:true}
                break;
                default:
                $scope.selector={}
                break;
            }
        });



        //自定义过滤器h函数 默认的过滤器匹配的是模糊匹配哦
        $scope.eq=function(source,target){
            console.log(source);
            console.log(target)
            return source===target;
        }

        //console.log($location.)
    }]);


})(angular);
