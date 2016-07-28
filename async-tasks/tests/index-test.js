/**
 * Created by andrei.maksimchanka on 7/27/2016.
 */


var expect = chai.expect;


describe('Asynchronous Tasks', function() {

    it('should call render array of objects', function() {
        var vm = asyncTask;

        //input
        var addr1 = "blabla 1";
        var addr2 = "lollol 2";

        var storesDatabase = [];
        var addresses = [addr1, addr2];

        Promise.all( addresses.map( vm.getZip ) )
                .then( (zips) => {
                    return Promise.all( zips.map( vm.getStores ) );
                })
                .then ( (stores) => {
                    return vm.render([].concat.apply([], stores));
                });

        /*

         Promise.all( addresses.map( vm.getZip ) )
         .all( (zips) => zips.map( vm.getStores ) )
         .then( function() {
         storesDatabase.push(stores);
         storesDatabase = [].concat.apply([], storesDatabase);
         return vm.render(storesDatabase);
         });

         */
    });

});