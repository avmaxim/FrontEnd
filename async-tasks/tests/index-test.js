/**
 * Created by andrei.maksimchanka on 7/27/2016.
 */


var expect = chai.expect;

describe('Asynchronous Tasks', function() {

    it('should result an array of 4 stores with promises', function() {
        var vm = asyncTask;

        //input
        var addr1 = "blabla 1";
        var addr2 = "lollol 2";
        
        var addresses = [addr1, addr2];

        Promise.all( addresses.map( vm.getZip ) )
                .then( zips => Promise.all( zips.map( vm.getStores ) ) )
                .then ( stores => vm.render([].concat.apply([], stores)) );
    });

});