/**
 * Created by andrei.maksimchanka on 7/27/2016.
 */


var asyncTaskNo1 = (function(){

    var getZip = function(addr, cb) {
        setTimeout(function() {
            cb(Math.random() * 1000);
        }, Math.random() * 1000);
    };

    var getStores = function(zip, cb) {
        setTimeout(function() {
            cb([{store: "1_" + zip }, {store: "1_" + zip }]);
        }, Math.random() * 1000);
    };

    var render = function(stores) {
        console.log(stores);
    };

    return {
        getZip: getZip,
        getStores: getStores,
        render: render
    }

})();