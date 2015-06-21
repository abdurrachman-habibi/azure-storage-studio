(function(){
    var constantRoutes = [
        {
            url: '/',
            configuration: {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            }
        },{
            url: '/blob/:account',
            configuration: {
                templateUrl: 'app/blob/blob.html',
                controller: 'BlobController',
                controllerAs: 'blob'
            }
        }
    ];

    angular.module('azure').constant('routes', constantRoutes);
})();