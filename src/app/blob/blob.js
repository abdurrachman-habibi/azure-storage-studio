(function () {
    angular.module('azure').controller('BlobController', BlobController);
    BlobController.$inject = ['$routeParams', 'blobServiceModule', 'accountStorageService'];

    function BlobController($routeParams, blobServiceModule, accountStorageService) {
        var vm = this;
        vm.containers = [];
        vm.preview = preview;
        vm.download = download;
        vm.edit = edit;
        vm.remove = remove;

        var blobService;

        init();


        function init() {
            var accounts = accountStorageService.load();

            var name = $routeParams.account;
            var key = accounts[name];

            blobService = blobServiceModule.load(name, key);

            blobService.listContainer().then(function (result) {
                result.entries.forEach(function (entry) {
                    var container = {
                        name: entry.name
                    };

                    blobService.listBlobs(entry.name).then(function (result) {
                        container.items = result.entries;
                        vm.containers.push(container);
                    });
                });
            });
        }

        function preview(containerName, item) {
            blobService.download(containerName, item.name).then(function (result) {
                item.isDownloaded = true;
                item.base64 = 'data:image/png;base64,' + result;
            });
        }

        function download(containerName, item) {
        }

        function edit(containerName, item) {

        }

        function remove(containerName, item) {

        }
    }
})();