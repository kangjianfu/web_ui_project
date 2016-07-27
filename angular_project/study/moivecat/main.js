(function(angular){
    /**
    *  Module
    *
    * Description
    */
//     angular.module('movecat', [
//         'ngRoute',
//         'moivecat.in_theaters',
//         'moivecat.top250',
//         'moivecat.coming_soon']).config(['$routeProvider',function($routeProvider) {
//         $routeProvider.otherwise({ redirectTo: '/in_theaters/1' })
//     }]);
// })(angular) 

   angular.module('movecat', [
        'ngRoute',
        'moivecat.movie_list']).config(['$routeProvider',function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' })
    }]);
})(angular)