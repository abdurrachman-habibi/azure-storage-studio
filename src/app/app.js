/// <reference path="../typings/angularjs/angular.d.ts"/>
(function () {
    var app = angular.module('azure', ['ngAnimate', 'ngTouch', 'ngMaterial', 'ngRoute', 'LocalStorageModule']);

    app.run(['$location', '$rootScope', '$route', function ($location, $rootScope, $route) {

    }]);

    app.config(['$httpProvider', '$locationProvider', '$mdThemingProvider', '$routeProvider', 'routes',
        function ($httpProvider, $locationProvider, $mdThemingProvider, $routeProvider, routes) {

            routes.forEach(function (r) {
                r.configuration.resolve = angular.extend(r.configuration.resolve || {}, {
                    appStart: ['appStartService', function (appStartService) {
                        return appStartService.start();
                    }]
                });

                $routeProvider.when(r.url, r.configuration);
            });

            $routeProvider.otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(false);
        }]);
})();

(function () {
    var throttle = function (type, name, obj) {
        var obj = obj || document;
        var running = false;
        var func = function (evt) {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name, {'detail': evt.target}));
                running = false;
            });
        };
        obj.addEventListener(type, func, true);
    };

    throttle("scroll", "optimizedScroll");
})();