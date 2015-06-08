(function () {
    'use strict';

    angular.module('azure').controller('ShellController', ShellController);
    ShellController.$inject = ['$location', '$mdMedia', '$mdSidenav', '$rootScope', '$timeout', '$window'];

    function ShellController($location, $mdMedia, $mdSidenav, $rootScope, $timeout, $window) {
        var vm = this;

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