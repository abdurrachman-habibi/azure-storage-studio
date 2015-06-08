(function(){
    var constantRoutes = [
        {
            url: '/',
            configuration: {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            }
        }
    ];

    angular.module('azure').constant('routes', constantRoutes);
})();