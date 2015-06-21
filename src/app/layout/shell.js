(function () {
    'use strict';

    angular.module('azure').controller('ShellController', ShellController);
    ShellController.$inject = ['$location', '$mdDialog', '$rootScope', '$timeout', 'accountServiceModule', 'accountStorageService'];

    function ShellController($location, $mdDialog, $rootScope, $timeout, accountServiceModule, accountStorageService) {
        var vm = this;

        vm.account = accountStorageService.load();
        vm.storageType = {
            'table': 'Table Storage',
            'blob': 'Blob Storage',
            'file': 'File Storage'
        };

        vm.accountName = 'givememymeal';
        vm.accountKey = '';

        vm.addAccount = function () {
            $mdDialog.show({
                template: '<md-dialog>' +
                '<md-dialog-content>' +
                '<md-input-container flex>' +
                '<label>Account Name</label> <input ng-model="dialog.accountName">' +
                '</md-input-container>' +
                '<md-input-container flex>' +
                '<label>Account Key</label> <input ng-model="dialog.accountKey">' +
                '</md-input-container>' +
                '</md-dialog-content>' +
                '<div class="md-actions">' +
                '<md-button ng-click="dialog.add()" class="md-primary">' +
                'Add' +
                '</md-button>' +
                '<md-button ng-click="dialog.cancel()" class="md-primary">' +
                'Cancel' +
                '</md-button>' +
                '</div>' +
                '</md-dialog>',
                controller: function DialogController() {
                    var dialog = this;
                    dialog.add = function () {
                        accountServiceModule.validate(dialog.accountName, dialog.accountKey).then(function (result) {
                            if (result) {
                                accountStorageService.update(dialog.accountName, dialog.accountKey);
                                vm.account = accountStorageService.load();
                                $mdDialog.hide();
                            }
                            else {
                                alert('Invalid!');
                            }
                        });
                    };

                    dialog.cancel = function () {
                        $mdDialog.hide();
                    }
                },
                controllerAs: 'dialog'
            });
        };

        vm.updateAccount = function () {

        };

        vm.removeAccount = function () {
            accountStorageService.remove(vm.selectedAccount);
            vm.account = accountStorageService.load();
        };

        vm.navigateTo = function (type, acc) {
            $location.path('/' + type + '/' + acc);
        };

        $rootScope.$on('$routeChangeSuccess', function () {
            var lastScrollTop = 0;
            if (vm.isLoading) {
                vm.isLoading = false;

                document.addEventListener('optimizedScroll', function (event) {

                    $timeout(function () {
                        var st = event.detail.scrollTop;
                        if (st !== undefined) {
                            if (st - lastScrollTop < -2) {
                                vm.isScrollingDown = false;
                            }
                            else if (st - lastScrollTop > 2) {
                                vm.isScrollingDown = true;
                            }
                            lastScrollTop = st;
                        }
                    });
                });
            }
        });
    }
})();