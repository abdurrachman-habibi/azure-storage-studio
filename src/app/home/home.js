/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function(){
    angular.module('azure').controller('HomeController', HomeController);
    HomeController.$inject = ['$window', '$scope', 'accountServiceModule', 'accountStorageService'];
    
    function HomeController($window, $scope, accountServiceModule, accountStorageService){
        var vm = this;
        vm.account = accountStorageService.load();
        vm.storageType = {
            'table' : 'Table Storage',
            'blob' : 'Blob Storage',
            'file' : 'File Storage'
        };

        vm.accountName = 'givememymeal';
        vm.accountKey = '';

        vm.addAccount = function(){
            accountServiceModule.validate(vm.accountName, vm.accountKey).then(function(result){
                if(result){
                    accountStorageService.update(vm.accountName, vm.accountKey);
                    vm.account = accountStorageService.load();
                }
                else{
                    alert('Invalid!');
                }
            });
        };

        vm.updateAccount = function(){

        };

        vm.removeAccount = function(){
            accountStorageService.remove(vm.selectedAccount);
            vm.account = accountStorageService.load();
        };
    }
})();