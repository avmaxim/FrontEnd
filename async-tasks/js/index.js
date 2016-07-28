/**
 * Created by andrei.maksimchanka on 7/27/2016.
 */

var asyncTask = (function(){

    var getZip = function(addr) {
        return new Promise( function(resolve){
            setTimeout(function () {
                resolve( Math.random() * 1000 );
            }, Math.random() * 1000);
        });
    };

    var getStores = function(zip) {
        return new Promise( function(resolve){
            setTimeout(function () {
                resolve( [{store: "1_" + zip }, {store: "1_" + zip }] );
            }, Math.random() * 1000);
        });
    };

    var render = function(stores) {
        return new Promise( function(resolve) {
            console.log(stores);
            resolve();
        });
    };

    return {
        getZip: getZip,
        getStores: getStores,
        render: render
    }

})();