(function () {
    'use strict';

    angular.module('azure').controller('ShellController', ShellController);
    ShellController.$inject = ['$location', '$mdMedia', '$mdSidenav', '$rootScope', '$timeout', '$window'];

    function ShellController($location, $mdMedia, $mdSidenav, $rootScope, $timeout, $window) {
        var vm = this;
    }
})();