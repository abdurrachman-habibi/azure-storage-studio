(function(){

    function appStartService($interval, $q) {
        var isAppInitialized = false;

        return {
            start: start
        };

        function start()
        {
            if (isAppInitialized === false) {
                isAppInitialized = true;


            }
            else{
                return true;
            }
        }
    }

    angular.module('azure').factory('appStartService', appStartService);
    appStartService.$inject=['$interval', '$q'];
})();