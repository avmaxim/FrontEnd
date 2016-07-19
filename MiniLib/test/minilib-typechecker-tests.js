/**
 * Created by andrei on 7/18/2016.
 */


var assert = chai.assert;

describe('MiniLib.TypeChecker', function() {
    describe('isArray', function() {
        //Positive tests
        it('should be True when arg is \'[]\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray([]));
        });
        it('should be True when arg is \'[undefined]\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray([undefined]));
        });
        it('should be True when arg is \'[100, 200]\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray([100, 200]));
        });
        it('should be True when arg is \'[100, undefined, 200]\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray([100, undefined, 200]));
        });
        it('should be True when arg is \'[{g: 0}, true, 10, "", null, NaN]\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray([{g: 0}, true, 10, "", null, NaN]));
        });
        it('should be True when arg is \'new Array\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray(new Array));
        });
        it('should be True when arg is \'new Array(0)\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray(new Array(0)));
        });
        it('should be True when arg is \'new Array(3, 5)\'', function () {
            assert.isOk(MiniLib.TypeChecker.isArray(new Array(3, 5)));
        });
        it('should be True when arg is \'[100, undefined * 1, 200]\'', function () {
            var testArr = [100];
            delete testArr[0];
            assert.isOk(MiniLib.TypeChecker.isArray(testArr));
        });

        //Negative tests
        it('should be False when arg is \'undefined\'', function () {
            assert.isNotOk(MiniLib.TypeChecker.isArray(undefined));
        });
        it('should be False when arg is \'null\'', function () {
            assert.isNotOk(MiniLib.TypeChecker.isArray(null));
        });
        it('should be False when arg is \'NaN\'', function () {
            assert.isNotOk(MiniLib.TypeChecker.isArray(NaN));
        });
        it('should be False when arg is \'""\'', function () {
            assert.isNotOk(MiniLib.TypeChecker.isArray(""));
        });
        it('should be False when arg is \'0\'', function () {
            assert.isNotOk(MiniLib.TypeChecker.isArray(0));
        });
        it('should be False when arg is \'new Function\'', function () {
            assert.isNotOk(MiniLib.TypeChecker.isArray(new Function));
        });
    });


    describe('isBoolean', function() {

        //Positive tests
        it('should be True when arg is \'true\'', function(){
            assert.isOk(MiniLib.TypeChecker.isBoolean(true));
        });
        it('should be True when arg is \'false\'', function(){
            assert.isOk(MiniLib.TypeChecker.isBoolean(false));
        });
        it('should be True when arg is \'new Boolean\'', function(){
            assert.isOk(MiniLib.TypeChecker.isBoolean(new Boolean));
        });
        it('should be True when arg is \'new Boolean(true)\'', function(){
            assert.isOk(MiniLib.TypeChecker.isBoolean(new Boolean(true)));
        });
        it('should be True when arg is \'100 == 100\'', function(){
            assert.isOk(MiniLib.TypeChecker.isBoolean(100 == 100));
        });
        it('should be True when arg is \'Array.isArray([3, 5])\'', function(){
            assert.isOk(MiniLib.TypeChecker.isBoolean(Array.isArray([3, 5])));
        });

        //Negative tests
        it('should be False when arg is \'"true"\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean("true"));
        });

        it('should be False when arg is \'undefined\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean(undefined));
        });
        it('should be False when arg is \'null\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean(null));
        });
        it('should be False when arg is \'NaN\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean(NaN));
        });
        it('should be False when arg is \'""\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean(""));
        });
        it('should be False when arg is \'0\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean(0));
        });
        it('should be False when arg is \'new Function\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isBoolean(new Function));
        });
    });


    describe('isDate', function() {

        //Positive tests
        it('should be True when arg is \'new Date\'', function(){
            assert.isOk(MiniLib.TypeChecker.isDate(new Date));
        });
        it('should be True when arg is \'new Date()\'', function(){
            assert.isOk(MiniLib.TypeChecker.isDate(new Date()));
        });
        it('should be True when arg is \'new Date("2015-11-09")\'', function(){
            assert.isOk(MiniLib.TypeChecker.isDate(new Date("2015-11-09")));
        });

        //Negative tests
        it('should be False when arg is \'"2015-11-09"\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(""));
        });

        it('should be False when arg is \'undefined\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(undefined));
        });
        it('should be False when arg is \'null\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(null));
        });
        it('should be False when arg is \'NaN\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(NaN));
        });
        it('should be False when arg is \'""\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(""));
        });
        it('should be False when arg is \'0\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(0));
        });
        it('should be False when arg is \'new Function\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isDate(new Function));
        });
    });


    describe('isNumber', function() {

        //Positive tests
        it('should be True when arg is \'0\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(0));
        });
        it('should be True when arg is \'10\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(10));
        });
        it('should be True when arg is \'0.10\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(0.10));
        });
        it('should be True when arg is \'-0.10\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(-0.10));
        });
        it('should be True when arg is \'new Number\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(new Number));
        });
        it('should be True when arg is \'new Number(10)\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(new Number(10)));
        });
        it('should be True when arg is \'NaN\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNumber(NaN));
        });

        //Negative tests
        it('should be False when arg is \'"10"\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNumber(""));
        });

        it('should be False when arg is \'undefined\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNumber(undefined));
        });
        it('should be False when arg is \'null\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNumber(null));
        });

        it('should be False when arg is \'""\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNumber(""));
        });
        it('should be False when arg is \'new Function\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNumber(new Function));
        });
    });


    describe('isString', function() {

        //Positive tests
        it('should be True when arg is \'""\'', function(){
            assert.isOk(MiniLib.TypeChecker.isString(""));
        });
        it('should be True when arg is \'"ABCabc897*&^"\'', function(){
            assert.isOk(MiniLib.TypeChecker.isString("ABCabc897*&^"));
        });
        it('should be True when arg is \'new String\'', function(){
            assert.isOk(MiniLib.TypeChecker.isString(new String));
        });
        it('should be True when arg is \'new String("qwe")\'', function(){
            assert.isOk(MiniLib.TypeChecker.isString(new String("qwe")));
        });
        it('should be True when arg is \'""\'', function(){
            assert.isOk(MiniLib.TypeChecker.isString(""));
        });

        //Negative tests
        it('should be False when arg is \'10\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isString(10));
        });

        it('should be False when arg is \'undefined\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isString(undefined));
        });

        it('should be False when arg is \'false\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isString(false));
        });

        it('should be False when arg is \'null\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isString(null));
        });

        it('should be False when arg is \'NaN\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isString(NaN));
        });

        it('should be False when arg is \'new Date\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isString(new Date));
        });
    });



    describe('isFunction', function() {

        //Positive tests
        it('should be True when arg is \'function(){}\'', function(){
            assert.isOk(MiniLib.TypeChecker.isFunction(function(){}));
        });
        it('should be True when arg is \'new Function\'', function(){
            assert.isOk(MiniLib.TypeChecker.isFunction(new Function));
        });
        it('should be True when arg is \'new Function("item", "return item < 100;")\'', function(){
            assert.isOk(MiniLib.TypeChecker.isFunction(new Function("item", "return item < 100;")));
        });
        var functionExpr = function(){ console.log("hi there"); }
        it('should be True when arg is \'isFunction\'', function(){
            assert.isOk(MiniLib.TypeChecker.isFunction(functionExpr));
        });

        //Negative tests
        it('should be False when arg is \'""\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isFunction(""));
        });

        it('should be False when arg is \'undefined\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isFunction(undefined));
        });

        it('should be False when arg is \'false\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isFunction(false));
        });

        it('should be False when arg is \'null\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isFunction(null));
        });

        it('should be False when arg is \'NaN\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isFunction(NaN));
        });

        it('should be False when arg is \'new Date\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isFunction(new Date));
        });
    });


    describe('isUndefined', function() {

        //Positive tests
        it('should be True when arg is \'undefined\'', function(){
            assert.isOk(MiniLib.TypeChecker.isUndefined(undefined));
        });
        it('should be True when arg is variable got set to Undefined by JS interpreter', function(){
            var undefVar;
            assert.isOk(MiniLib.TypeChecker.isUndefined(undefVar));
        });

        it('should be True when arg is variable got set to undefined manually', function(){
            var undefVar = undefined;
            assert.isOk(MiniLib.TypeChecker.isUndefined(undefVar));
        });

        //Negative tests
        it('should be False when arg is \'""\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isUndefined(""));
        });

        it('should be False when arg is \'NaN\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isUndefined(NaN));
        });

        it('should be False when arg is \'false\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isUndefined(false));
        });

        it('should be False when arg is \'null\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isUndefined(null));
        });

        it('should be False when arg is \'new Date\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isUndefined(new Date));
        });
    });


    describe('isNull', function() {

        //Positive tests
        it('should be True when arg is \'null\'', function(){
            assert.isOk(MiniLib.TypeChecker.isNull(null));
        });
        it('should be True when arg is variable got set to null manually', function(){
            var nullVar = null;
            assert.isOk(MiniLib.TypeChecker.isNull(nullVar));
        });

        //Negative tests
        it('should be False when arg is \'""\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNull(""));
        });
        it('should be False when arg is \'NaN\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNull(NaN));
        });
        it('should be False when arg is \'false\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNull(false));
        });
        it('should be False when arg is \'new Date\'', function(){
            assert.isNotOk(MiniLib.TypeChecker.isNull(new Date));
        });
    });

});

