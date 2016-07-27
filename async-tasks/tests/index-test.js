/**
 * Created by andrei.maksimchanka on 7/27/2016.
 */


var expect = chai.expect;


describe('Asynchronous Tasks', function() {

    it('should call render array of objects', function() {
        var vm = asyncTaskNo1;

        //input
        var addr1 = "blabla 1";
        var addr2 = "lollol 2";

        var storesToPrint = [];
        var addresses = [addr1, addr2];

        for(var i = 0; i < addresses.length; i++){
            vm.getZip(addresses[i], function( zip ){
                vm.getStores(zip, function( stores){
                    storesToPrint.push( stores );
                    if(storesToPrint.length == addresses.length) {
                        storesToPrint = [].concat.apply([], storesToPrint);

                        expect(storesToPrint.length).to.be.equal(4);
                        expect(storesToPrint[0].store).to.be.eql(storesToPrint[1].store);
                        expect(storesToPrint[2].store).to.be.eql(storesToPrint[3].store);

                        //output
                        vm.render(storesToPrint);
                    }
                });
            });
        }

    });

});