(function(angular){
    /**
    *  Module
    *
    * Description
    */
    var http=angular.module('moivecat.service.http', []);
    http.service('HttpService', ['$doucment',function ($doucment) {
        //1:处理url 中的回调参数
        //2：创建script 标签
        //3：挂在script
        //4
        this.jsonp=function(url,callback){

        }
    }])
})(angular)