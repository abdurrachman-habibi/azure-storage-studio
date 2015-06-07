var ImageService = require('./js/modules/imageService');
var imageService = new ImageService();

var client = client || {};

(function( o ){
    o.foo = "foo";
    o.bar = function(){
        return "bar";
    };

    o.buttonClick = function(){
        imageService.get();
    };

    return o;
})(client);