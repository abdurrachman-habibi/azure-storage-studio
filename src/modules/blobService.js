(function(){
    var azure = require('azure-storage');
    var http = require('http');

    function BlobService(account, key) {
        //process.env.AZURE_STORAGE_ACCOUNT
        //process.env.AZURE_STORAGE_ACCESS_KEY

        //this.storageClient = azure.createBlobService(account, key);
        //this.tableName = "meals";
    }

    BlobService.prototype = {
        get: function(){
            http.get("http://www.google.com/index.html", function(res) {
                console.log("Got response: " + res.statusCode);
            }).on('error', function(e) {
                console.log("Got error: " + e.message);
            });
        },

        listBlobs: function(){
            
        },

        query: function(){

        },

        download: function(){

        },

        upload: function(){

        }
    };

    function convertAzureObj(entity){
        var arr = [];

        entity.forEach(function(item){
            var obj = {};

            for(var prop in item){
                if(item.hasOwnProperty(prop)) {
                    obj[prop] = item[prop]['_'];
                }
            }

            arr.push(obj);
        });

        return arr;
    }


    module.exports = BlobService;
})();