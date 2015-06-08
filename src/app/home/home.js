/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function(){
    angular.module('azure').controller('HomeController', HomeController);
    HomeController.$inject = ['$window', '$scope', 'blobServiceModule'];
    
    function HomeController($window, $scope, blobServiceModule){
        var vm = this;

        vm.buttonClick = function(){
            blobServiceModule.get();
        }
    }
})();