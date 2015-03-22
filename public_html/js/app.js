var App = angular.module('app', ['ngRoute']);  // [] = injectiin

App.config(function ($routeProvider) {
    $routeProvider
            .when('/book', {
                templateUrl: 'template/book.html',
                controller: 'bookController'
            })
            .when('/index.html', {
                templateUrl: 'template/index.html',
                controller: 'indexController'
            })
            .otherwise({
                redirectTo: '/index'
            });

});
