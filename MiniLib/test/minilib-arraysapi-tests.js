/**
 * Created by andrei on 7/18/2016.
 */


var expect = chai.expect;

describe('MiniLib - ArraysAPI logic', function() {

    describe('forEach', function() {

        //Positive tests
        it('should pass when 1st arg is Array & 2nd arg is Function', function () {
            expect( function () {
                m.forEach( [10, 20], function (item, i, arr) {
                    console.log( i );
                });
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.forEach( [], function (item, i, arr) {
                    console.log( i );
                });
            }).to.not.throw();
        });

        it('should throw ReferenceError when function gets ONLY 1 instead 2 arguments', function () {
            expect( function () {
                m.forEach( [10, 20] );
            }).to.throw( ReferenceError );
        });

        it('should throw TypeError if 1st arg is NOT Array', function () {
            expect( function () {
                m.forEach( "", function (i, arr) {
                    console.log( i );
                });
            }).to.throw( TypeError );
        });

        it('should throw TypeError if 2nd param is NOT Function', function () {
            expect( function () {
                m.forEach( [10, 20], "");
            }).to.throw( TypeError );
        });

    });


    describe('filter', function() {

        it('should pass when 1st arg is Array & 2nd arg is Function ', function () {
            expect( function () {
                m.filter( [10, 20], function (item) {
                    return item > 0;
                });
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.filter( [], function (item) {
                    return item > 0;
                });
            }).to.not.throw();
        });

        it('should throw TypeError if 1st arg is NOT Array ', function () {
            expect( function () {
                m.filter( "", function (i, arr) {
                    console.log( i );
                });
            }).to.throw( TypeError );
        });

        it('should throw TypeError if 2nd param is NOT Function', function () {
            expect( function () {
                m.filter( [10, 20], "");
            }).to.throw( TypeError );
        });

    });

    describe('first', function() {

        it('should pass when 1st arg is Array', function () {
            expect( function () {
                m.first( [10, 20] );
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.first( [] );
            }).to.not.throw();
        });

        it('should throw TypeError if 1st arg is NOT Array ', function () {
            expect( function () {
                m.first( "" );
            }).to.throw( TypeError );
        });

    });

    describe('last', function() {

        it('should pass when 1st arg is Array', function () {
            expect( function () {
                m.last( [10, 20] );
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.last( [] );
            }).to.not.throw();
        });

        it('should throw TypeError if 1st arg is NOT Array \'', function () {
            expect( function () {
                m.last( "" );
            }).to.throw( TypeError );
        });

    });

    describe('take', function() {

        it('should pass when 1st arg is Array, 2nd arg is Number', function () {
            expect( function () {
                m.take( [10, 20], 1);
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.take( [], 0);
            }).to.throw( RangeError );
        });

        it('should throw TypeError if 1st arg is Array, 2nd arg is NOT Number \'', function () {
            expect( function () {
                m.take( [10, 20], function(){
                    // does NOT do anything
                });
            }).to.throw( TypeError );
        });

        it('should throw TypeError if 1st arg is NOT Array, 2nd arg is Number \'', function () {
            expect( function () {
                m.take( "", 1);
            }).to.throw( TypeError );
        });

    });

    describe('skip', function() {

        it('should pass when 1st arg is Array', function () {
            expect( function () {
                m.skip( [10, 20], 0);
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.skip( [], 0);
            }).to.throw( RangeError );
        });

        it('should throw TypeError if 2nd arg is NOT Number \'', function () {
            expect( function () {
                m.skip([10, 20], "");
            }).to.throw(TypeError);
        });

    });

    describe('map', function() {

        it('should pass when 1st arg is Array, 2nd is Function', function () {
            expect( function () {
                m.map( [10, 20], function(item){
                    return item * 2;
                });
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.map( [], function(item){
                    return item * 2;
                });
            }).to.not.throw();
        });

        it('should throw TypeError when 1st arg is Array, 2nd is NOT Function', function () {
            expect( function () {
                m.map( [10, 20], "");
            }).to.throw( TypeError);
        });

        it('should throw TypeError if 1st arg is NOT Array, 2nd arg is Function \'', function () {
            expect( function () {
                m.map( "", function(item){
                    return item * 2;
                });
            }).to.throw( TypeError );
        });

    });


    describe('reduce', function() {

        it('should pass when 1st arg is Array, 2nd is Function, 3rd is Number', function () {
            expect( function () {
                m.reduce( [10, 20], function(prevValue, curValue, curIndex, arr){
                    return prevValue + curValue;
                }, 10);
            }).to.not.throw();
        });

        it('should pass when 1st arg is empty Array', function () {
            expect( function () {
                m.reduce( [], function(prevValue, curValue, curIndex, arr){
                    return prevValue + curValue;
                }, 10);
            }).to.not.throw();
        });

        it('should throw TypeError when 1st arg is Array, 2nd is NOT Function, 3rd is NOT undefined', function () {
            expect( function () {
                m.reduce( [10, 20], "", 10);
            }).to.throw( TypeError );
        });

        it('should throw TypeError when 1st arg is NOT Array, 2nd is Function, 3rd is NOT undefined', function () {
            expect( function () {
                m.reduce( "", function(prevValue, curValue, curIndex, arr){
                    return prevValue + curValue;
                }, 10);
            }).to.throw( TypeError );
        });

        it('should throw TypeError when 1st arg is empty Array and 3rd is undefined', function () {
            expect( function () {
                m.reduce( [], function(prevValue, curValue, curIndex, arr){
                    return prevValue + curValue;
                });
            }).to.throw( TypeError );
        });
    });
});