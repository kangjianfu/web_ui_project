(function (angular) {


	// Your starting point. Enjoy the ride!
    /**
    * todomvc Module
    *
    * Description
    */
    var todoMvc=angular.module('todoMvc', ['ngRoute','app.controllers.main']);

    //配置路由规则
    
    todoMvc.config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/:sec?', {
            templateUrl: 'main_html',
            controller: 'mainCtrl'
        }).otherwise({ redirectTo: '/' });
    }]);
    


})(angular);
