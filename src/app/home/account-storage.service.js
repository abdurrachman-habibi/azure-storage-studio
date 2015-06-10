(function () {
    function accountStorageService(localStorageService) {

        var storageKey = 'account-storage';

        return {
            load: load,
            update: update,
            remove: remove
        };

        function load() {
            return localStorageService.get(storageKey) || {};
        }

        function update(name, key){
            var curr = load();
            curr[name] = key;
            localStorageService.set(storageKey, curr);
        }

        function remove(name){
            var curr = load();
            delete curr[name];
            localStorageService.set(storageKey, curr);
        }
    }

    angular.module('azure').factory('accountStorageService', accountStorageService);
})();