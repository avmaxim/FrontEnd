var assert = chai.assert;
var expect = chai.expect;

describe('Functions Chaining Tests for MiniLib.ArraysAPI', function() {
    describe('Test-array is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; Map(n): map by n items;', function() {
        describe('filter', function () {
            it('should be [3, 4, 5, 6, 7] when need to Filter items in (2, 8)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .filter(function (item) {
                            return item > 2;
                        })
                        .filter(function (item) {
                            return item < 8;
                        })
                        .result()
                ).to.be.eql([3, 4, 5, 6, 7]);
            });

            it('should be [4, 6, 10] when need to Filter (items > 1) => Map(2) => Skip(2) => Take(3)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .skip(2)
                        .take(3)
                        .result()
                ).to.be.eql([4, 6, 10]);
            });

            it('should be [4] when need to Map(2) => Take(3) => Skip(2) => Filter (items > 3)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .map(function (item) {
                            return item * 2;
                        })
                        .take(3)
                        .skip(2)
                        .filter(function (item) {
                            return item > 3;
                        })
                        .result()
                ).to.be.eql([4]);
            });

            it('should be [] when test-array is empty and need to Filter (items > 1) => Map(2) => Take(3) => Skip(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([])
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .take(3)
                        .skip(2)
                        .result()
                ).to.be.eql([]);
            });
        });


        describe('take', function () {
            it('should be [1, 2, 3, 4] when need to Take(8) => Take(4)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .take(8)
                        .take(4)
                        .result()
                ).to.be.eql([1, 2, 3, 4]);
            });

            it('should be [ 4, 6, 10, 12, 14, 16 ] when need to Take(8) => Filter (items > 1) => Map(2) => Skip(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .take(8)
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .skip(2)
                        .result()
                ).to.be.eql([4, 6, 10, 12, 14, 16]);
            });

            it('should be [4, 6, 10] when need to Filter (items > 1) => Map(2) => Skip(2) => Take(3)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .skip(2)
                        .take(3)
                        .result()
                ).to.be.eql([4, 6, 10]);
            });

            it('should be [] when test-array is empty and need to  Take(3) => Filter (items > 1) => Map(2) => Skip(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([])
                        .take(3)
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .skip(2)
                        .result()
                ).to.be.eql([]);
            });
        });



        describe('skip', function () {
            it('should be [1, 2, 3, 4, 6, 7, 8, 10] when need to Skip(8) => Skip(4)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .skip(8)
                        .skip(4)
                        .result()
                ).to.be.eql([1, 2, 3, 4, 6, 7, 8, 10]);
            });

            it('should be [4, 8, 10, 12, 14] when need to Skip(2) => Filter (items > 1) => Map(2) => Take(5)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .skip(2)
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .take(5)
                        .result()
                ).to.be.eql([4, 8, 10, 12, 14]);
            });

            it('should be [4, 6] when need to Filter (items > 1) => Map(2) => Take(3) => Skip(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8])
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .take(3)
                        .skip(2)
                        .result()
                ).to.be.eql([4, 6]);
            });

            it('should be [] when test-array is empty and need to  Take(3) => Filter (items > 1) => Map(2) => Skip(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([])
                        .take(3)
                        .filter(function (item) {
                            return item > 1;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .skip(2)
                        .result()
                ).to.be.eql([]);
            });
        });


        describe('map', function () {
            it('should be [4, 8, 12, 16, 20, 24, 28, 32, 36, 40] when need to Map(2) => Map(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .map(function (item) {
                            return item * 2;
                        })
                        .map(function (item) {
                            return item * 2;
                        })
                        .result()
                ).to.be.eql([4, 8, 12, 16, 20, 24, 28, 32, 36, 40]);
            });

            it('should be [2, 4, 8, 10, 12] when need to Map(2) => Skip(2) => Filter (items > 1) => Take(5)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .map(function (item) {
                            return item * 2;
                        })
                        .skip(2)
                        .filter(function (item) {
                            return item > 1;
                        })
                        .take(5)
                        .result()
                ).to.be.eql([2, 4, 8, 10, 12]);
            });

            it('should be [4, 8, 10, 12, 14] when need to Skip(2) => Filter (items > 1) => Take(5) => Map(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        .skip(2)
                        .filter(function (item) {
                            return item > 1;
                        })
                        .take(5)
                        .map(function (item) {
                            return item * 2;
                        })
                        .result()
                ).to.be.eql([4, 8, 10, 12, 14]);
            });


            it('should be [] when test-array is empty and need to Map(2)', function () {
                expect(
                    MiniLib.ArraysAPI
                        .chain([])
                        .map(function (item) {
                            return item * 2;
                        })
                        .result()
                ).to.be.eql([]);
            });
        });
        

    });
});