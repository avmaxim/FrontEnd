var expect = chai.expect;

describe('Functions Chaining Tests for MiniLib', function() {

    describe('Test-array is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; Map(n): map by n items;', function() {

        describe('Chain crash test', function(){
            it('should NOT CRASH on teacher's chain test!', function() {
            var ch = m.chain([1,2,3]);

            ch.map(x=> x * 2);

            expect(ch.result()).to.be.eql([1,2,3]);

            var ch2 = ch.map(x=> x * 2);

            expect(ch.result()).to.be.eql([1,2,3]);
            expect(ch2.result()).to.be.eql([2,4,6]);
        });
    });

    describe('filter', function () {

        it('should be [3, 4, 5, 6, 7] when need to Filter items in (2, 8)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .filter( function (item) {
                    return item > 2;
                })
                .filter( function (item) {
                    return item < 8;
                })
                .result();
            expect( result ).to.be.eql( [3, 4, 5, 6, 7] );
        });

        it('should be [4, 6, 10] when need to Filter (items > 1) => Map(2) => Skip(2) => Take(3)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .filter( function (item) {
                    return item > 1;
                })
                .map( function (item) {
                    return item * 2;
                })
                .skip(2)
                .take(3)
                .result();
            expect( result ).to.be.eql( [4, 6, 10] );
        });

        it('should be [4] when need to Map(2) => Take(3) => Skip(2) => Filter (items > 3)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .map( function (item) {
                    return item * 2;
                })
                .take(3)
                .skip(2)
                .filter( function (item) {
                    return item > 3;
                })
                .result();
            expect( result ).to.be.eql( [4] );
        });

        it('should be [] when test-array is empty and need to Filter (items > 1)', function () {
            var result = m
                .chain( [] )
                .filter( function (item) {
                    return item > 1;
                })
                .result();
            expect( result ).to.be.eql( [] );
        });

    });

    describe('take', function () {

        it('should be [1, 2, 3, 4] when need to Take(8) => Take(4)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .take(8)
                .take(4)
                .result();
            expect( result ).to.be.eql( [1, 2, 3, 4] );
        });

        it('should be [ 4, 6, 10, 12, 14, 16 ] when need to Take(8) => Filter (items > 1) => Map(2) => Skip(2)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .take(8)
                .filter( function (item) {
                    return item > 1;
                })
                .map( function (item) {
                    return item * 2;
                })
                .skip(2)
                .result();
            expect( result ).to.be.eql( [4, 6, 10, 12, 14, 16] );
        });

        it('should be [4, 6, 10] when need to Filter (items > 1) => Map(2) => Skip(2) => Take(3)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .filter( function (item) {
                    return item > 1;
                })
                .map( function (item) {
                    return item * 2;
                })
                .skip(2)
                .take(3)
                .result();
            expect( result ).to.be.eql( [4, 6, 10] );
        });

        it('should throw RangeError when need to Take(100) in chaining', function () {
            var func = function() {
                m
                    .chain( [1, 2, 3, 4, 5, 6, 7, 8] )
                    .filter( function (item) {
                        return item > 1;
                    })
                    .map( function (item) {
                        return item * 2;
                    })
                    .take(100)
                    .skip(3)
                    .result();
            };
            expect( func ).to.throw( RangeError );
        });

        it('should throw RangeError when input array is empty and need to Take(0) in chaining', function () {
            var func = function() {
                m
                    .chain( [] )
                    .filter( function (item) {
                        return item > 1;
                    })
                    .map( function (item) {
                        return item * 2;
                    })
                    .take(0)
                    .skip(100)
                    .result();
            };
            expect( func ).to.throw( RangeError );
        });

    });

    describe('skip', function () {

        it('should be [1, 2, 3, 4, 6, 7, 8, 10] when need to Skip(8) => Skip(4)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .skip(8)
                .skip(4)
                .result();
            expect( result ).to.be.eql( [1, 2, 3, 4, 6, 7, 8, 10] );
        });

        it('should be [4, 8, 10, 12, 14] when need to Skip(2) => Filter (items > 1) => Map(2) => Take(5)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .skip(2)
                .filter( function (item) {
                    return item > 1;
                })
                .map( function (item) {
                    return item * 2;
                })
                .take(5)
                .result();
            expect( result ).to.be.eql( [4, 8, 10, 12, 14] );
        });

        it('should be [4, 6] when need to Filter (items > 1) => Map(2) => Take(3) => Skip(2)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8] )
                .filter( function (item) {
                    return item > 1;
                })
                .map( function (item) {
                    return item * 2;
                })
                .take(3)
                .skip(2)
                .result();
            expect( result ).to.be.eql( [4, 6] );
        });

        it('should throw RangeError when need to Skip(100) in chaining', function () {
            var func = function() {
                m
                    .chain( [1, 2, 3, 4, 5, 6, 7, 8] )
                    .filter( function (item) {
                        return item > 1;
                    })
                    .map( function (item) {
                        return item * 2;
                    })
                    .take(3)
                    .skip(100)
                    .result();
            };
            expect( func ).to.throw( RangeError );
        });

        it('should throw RangeError when input array is empty and need to Skip(0) in chaining', function () {
            var func = function() {
                m
                    .chain( [] )
                    .filter( function (item) {
                        return item > 1;
                    })
                    .map( function (item) {
                        return item * 2;
                    })
                    .take(3)
                    .skip(100)
                    .result();
            };
            expect( func ).to.throw( RangeError );
        });
    });

    describe('map', function () {

        it('should be [4, 8, 12, 16, 20, 24, 28, 32, 36, 40] when need to Map(2) => Map(2)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .map( function (item) {
                    return item * 2;
                })
                .map( function (item) {
                    return item * 2;
                })
                .result();
            expect( result ).to.be.eql( [4, 8, 12, 16, 20, 24, 28, 32, 36, 40] );
        });

        it('should be [2, 4, 8, 10, 12] when need to Map(2) => Skip(2) => Filter (items > 1) => Take(5)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .map( function (item) {
                    return item * 2;
                })
                .skip(2)
                .filter( function (item) {
                    return item > 1;
                })
                .take(5)
                .result();
            expect( result ).to.be.eql( [2, 4, 8, 10, 12] );
        });

        it('should be [4, 8, 10, 12, 14] when need to Skip(2) => Filter (items > 1) => Take(5) => Map(2)', function () {
            var result = m
                .chain( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                .skip(2)
                .filter( function (item) {
                    return item > 1;
                })
                .take(5)
                .map( function (item) {
                    return item * 2;
                })
                .result();
            expect( result ).to.be.eql( [4, 8, 10, 12, 14] );
        });


        it('should be [] when test-array is empty and need to Map(2)', function () {
            var result = m
                .chain( [] )
                .map( function (item) {
                    return item * 2;
                })
                .result();
            expect( result ).to.be.eql( [] );
        });
    });


});