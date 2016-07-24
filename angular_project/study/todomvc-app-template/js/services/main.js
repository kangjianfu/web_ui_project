(function(angular){
    angular.module('app.services.main',[]).service('MainService', ['$window',function ($window) {

        var storage=$window.localStorage;
        var tasks=storage['my_tasks_list']?JSON.parse(storage['my_tasks_list']):[];;
        //var tasks=[{id:1,name:'惹我你1',status:true},{id:2,name:'惹我2',status:false}]
        //获取列表
        this.getTasks=function(){
            return tasks;
        }
         this.addTask=function(task_name){
            tasks.push({id:new Date().getTime(),name:task_name,status:false})
           // $scope.tasks[$scope.tasks.length]={id:new Date().getTime(),name:$scope.task,status:false}
           save();
        };
        this.deleteTask=function(taskId){
            angular.forEach(tasks, function(task,index){
                if(taskId===task.id){
                     tasks.splice(index, 1)
                }
            })
            save()
        };
        this.deleteCompleted=function(){
            var newTasks=[];
            angular.forEach(tasks,function(task,index){
                if(!task.status){
                    newTasks.push(task)
                }       
            })
            tasks=newTasks;
            save();
            return tasks;
        };
        this.isOk=function(){
            for(var i=0;i<tasks.length;i++){
                if(tasks[i].status){
                    return tasks[i].status;
                }
                return false;
            }
        };
        this.check=function(){
            save();
        }
        function save(){
            storage['my_tasks_list']=JSON.stringify(tasks)
        };
        var flag=true;
        this.checkAll=function(){
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].status=flag;
            }
            save();
            flag=!flag;
        }
    }])
})(angular)