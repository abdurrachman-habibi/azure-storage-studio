(function(){
    var Azure = require('azure-storage');
    var Promise = require("bluebird");

    function AccountService(){

    }

    AccountService.prototype = {
        validate: function(name, key){
            var deferred = Promise.defer();

            try{
                var blobService = Azure.createBlobService(name, key);

                blobService.listContainersSegmented(null, null, function(error, result) {
                    if(error){
                        deferred.resolve(false);
                    }
                    else{
                        deferred.resolve(true);
                    }
                });
            }
            catch(e){
                deferred.resolve(false);
            }

            return deferred.promise;
        }
    };

    module.exports = AccountService;
})();