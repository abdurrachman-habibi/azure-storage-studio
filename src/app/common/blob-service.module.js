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