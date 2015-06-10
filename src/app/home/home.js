/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function(){
    angular.module('azure').controller('HomeController', HomeController);
    HomeController.$inject = ['$window', '$scope', 'accountServiceModule'];
    
    function HomeController($window, $scope, accountServiceModule){
        var vm = this;

        vm.addAccount = function(){
            var result = accountServiceModule.validate(vm.accountName, vm.accountKey);

            console.log(result);
        }
    }
})();