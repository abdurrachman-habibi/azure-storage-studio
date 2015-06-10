(function(){
    var azure = require('azure-storage');

    function AccountService(){

    }

    AccountService.prototype = {
        validate: function(name, key){
            try{
                var storageClient = azure.createBlobService(name, key);

                return true;
            }
            catch(e){
                return false;
            }
        }
    }

    module.exports = AccountService;
})();