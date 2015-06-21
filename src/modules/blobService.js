(function () {
    var azure = require('azure-storage');
    var Promise = require("bluebird");
    var http = require('http');
    //var fs = require('fs');
    var Base64Encode = require('base64-stream').encode;

    function BlobService(account, key) {
        //process.env.AZURE_STORAGE_ACCOUNT
        //process.env.AZURE_STORAGE_ACCESS_KEY

        this.storageClient = azure.createBlobService(account, key);
        //this.tableName = "meals";
    }

    BlobService.prototype = {
        get: function () {
            http.get("http://www.google.com/index.html", function (res) {
                console.log("Got response: " + res.statusCode);
            }).on('error', function (e) {
                console.log("Got error: " + e.message);
            });
        },

        listContainer: function () {
            var deferred = Promise.defer();

            this.storageClient.listContainersSegmented(null, null, function (error, result) {
                deferred.resolve(result);
            });

            return deferred.promise;
        },

        listBlobs: function (container) {
            var deferred = Promise.defer();

            this.storageClient.listBlobsSegmented(container, null, null, function (error, result) {
                deferred.resolve(result);
            });

            return deferred.promise;
        },

        download: function (container, blob) {
            var deferred = Promise.defer();
            var streamTemp = new Base64Encode();
            //this.storageClient.getBlobToStream(container, blob, streamTemp, null,
            //    function (error, result, response) {
            //        var base64 = streamTemp.read().toString();
            //        deferred.resolve({result: result, response: response, base64: base64});
            //    });

            this.storageClient.createReadStream(container, blob, null, function (error, result, response) {
                var base64 = streamTemp.read().toString();
                deferred.resolve(base64);
            }).pipe(streamTemp);

            return deferred.promise;
        },

        upload: function () {

        }
    };

    function convertAzureObj(entity) {
        var arr = [];

        entity.forEach(function (item) {
            var obj = {};

            for (var prop in item) {
                if (item.hasOwnProperty(prop)) {
                    obj[prop] = item[prop]['_'];
                }
            }

            arr.push(obj);
        });

        return arr;
    }


    module.exports = BlobService;
})();