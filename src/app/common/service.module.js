(function(){

    function blobServiceModule($interval, $q) {
        var BlobService = require('./modules/blobService');
        var blobService = new BlobService();

        return {
            get: get
        };

        function get()
        {
            blobService.get();
        }
    }

    angular.module('azure').factory('blobServiceModule', blobServiceModule);
    blobServiceModule.$inject=['$interval', '$q'];
})();

(function(){
    function accountServiceModule($interval, $q) {
        var AccountService = require('./modules/accountService');
        var accountService = new AccountService();

        return {
            validate: validate
        };

        function validate(name, key)
        {
            return accountService.validate(name, key);
        }
    }

    angular.module('azure').factory('accountServiceModule', accountServiceModule);
})();