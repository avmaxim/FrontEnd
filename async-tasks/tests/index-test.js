/**
 * Created by andrei.maksimchanka on 7/27/2016.
 */


var expect = chai.expect;


describe('Q lib testing...', function () {
    it('should fail', function(){
        let asyncAdd = function (a, b){
            return new Promise( (res, rej) => {
                setTimeout(()=>{
                    res(a+b);
                }, 5000);
            });
        };

        window.t = Q.all([
            asyncAdd(10, 10),
            asyncAdd(20, 20)
        ]);
    });
});

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