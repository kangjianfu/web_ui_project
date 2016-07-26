(function(angular){
    /**
    *  Module
    *
    * Description
    */
    var http=angular.module('moivecat.service.http', []);
    http.service('HttpService', ['$window','$document',function ($window,$document) {
        //1:处理url 中的回调参数
        //2：创建script 标签
        //3：挂在script
        //4
        this.jsonp=function(url,data,callback){
                if(!url){
                    return ;
                }; 
                var callback_name='my_jsonp_'+Math.random().toString().replace(".","");
                $window[callback_name]=callback;
                var queryString=url.indexOf('?')==-1?'?':"&";
                for(var key in data){
                    queryString+=key +'='+data[key]+'&';
                }
                queryString+='callback='+callback_name;
               var script= $document[0].createElement('script');
               console.info(url+queryString)
               script.src=url+queryString;
               $document[0].body.appendChild(script)
            }
    }])
})(angular)


// (function(angular) {
//   // 由于默认angular提供的异步请求对象不支持自定义回调函数名
//   // angular随机分配的回调函数名称不被豆瓣支持
//   var http = angular.module('moviecat.services.http', []);
//   http.service('HttpService', ['$window', '$document', function($window, $document) {
//     // url : http://api.douban.com/vsdfsdf -> <script> -> html就可自动执行
//     this.jsonp = function(url, data, callback) {
//       var fnSuffix = Math.random().toString().replace('.', '');
//       var cbFuncName = 'my_json_cb_' + fnSuffix;
//       // 不推荐
//       $window[cbFuncName] = callback;
//       var querystring = url.indexOf('?') == -1 ? '?' : '&';
//       for (var key in data) {
//         querystring += key + '=' + data[key] + '&';
//       }
//       querystring += 'callback=' + cbFuncName;
//       var scriptElement = $document[0].createElement('script');
//       scriptElement.src = url + querystring;
//       $document[0].body.appendChild(scriptElement);
//     };
//   }]);
// })(angular);