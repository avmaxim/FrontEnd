/**
 * Created by andrei on 7/18/2016.
 */


var expect = chai.expect;

describe('MiniLib - TypeChecker logic', function() {

    describe('isArray', function() {

        //Positive tests
        it('should be True when arg is \'[]\'', function () {
            expect( m.isArray( [] ) ).to.be.true;
        });

        it('should be True when arg is \'[undefined]\'', function () {
            expect( m.isArray( [undefined] ) ).to.be.true;
        });

        it('should be True when arg is \'[100, 200]\'', function () {
            expect( m.isArray( [100, 200] ) ).to.be.true;
        });

        it('should be True when arg is \'[100, undefined, 200]\'', function () {
            expect( m.isArray( [100, undefined, 200] ) ).to.be.true;
        });

        it('should be True when arg is \'[{g: 0}, true, 10, "", null, NaN]\'', function () {
            expect( m.isArray( [{g: 0}, true, 10, "", null, NaN] ) ).to.be.true;
        });

        it('should be True when arg is \'new Array\'', function () {
            expect( m.isArray(new Array) ).to.be.true;
        });

        it('should be True when arg is \'new Array(0)\'', function () {
            expect( m.isArray( new Array(0) ) ).to.be.true;
        });

        it('should be True when arg is \'new Array(3, 5)\'', function () {
            expect( m.isArray( new Array(3, 5) ) ).to.be.true;
        });

        it('should be True when arg is \'[100, undefined * 1, 200]\'', function () {
            var testArr = [100];
            delete testArr[0];
            expect( m.isArray( testArr ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'undefined\'', function () {
            expect( m.isArray( undefined )).to.be.false;
        });

        it('should be False when arg is \'null\'', function () {
            expect( m.isArray( null ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function () {
            expect( m.isArray( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'""\'', function () {
            expect( m.isArray( "" ) ).to.be.false;
        });

        it('should be False when arg is \'0\'', function () {
            expect( m.isArray( 0 ) ).to.be.false;
        });

        it('should be False when arg is \'new Function\'', function () {
            expect( m.isArray( new Function ) ).to.be.false;
        });

    });

    describe('isBoolean', function() {

        //Positive tests
        it('should be True when arg is \'true\'', function(){
            expect( m.isBoolean( true ) ).to.be.true;
        });

        it('should be True when arg is \'false\'', function(){
            expect( m.isBoolean( false ) ).to.be.true;
        });

        it('should be True when arg is \'new Boolean\'', function(){
            expect( m.isBoolean( new Boolean ) ).to.be.true;
        });

        it('should be True when arg is \'new Boolean(true)\'', function(){
            expect( m.isBoolean( new Boolean( true ) ) ).to.be.true;
        });

        it('should be True when arg is \'100 == 100\'', function(){
            expect( m.isBoolean( 100 == 100 ) ).to.be.true;
        });

        it('should be True when arg is \'Array.isArray([3, 5])\'', function(){
            expect( m.isBoolean( Array.isArray( [3, 5] ) ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'"true"\'', function(){
            expect( m.isBoolean( "true" ) ).to.be.false;
        });

        it('should be False when arg is \'undefined\'', function(){
            expect( m.isBoolean( undefined ) ).to.be.false;
        });

        it('should be False when arg is \'null\'', function(){
            expect( m.isBoolean( null ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function(){
            expect( m.isBoolean( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'""\'', function(){
            expect( m.isBoolean( "" ) ).to.be.false;
        });

        it('should be False when arg is \'0\'', function(){
            expect( m.isBoolean( 0 ) ).to.be.false;
        });

        it('should be False when arg is \'new Function\'', function(){
            expect( m.isBoolean( new Function ) ).to.be.false;
        });

    });


    describe('isDate', function() {

        //Positive tests
        it('should be True when arg is \'new Date\'', function(){
            expect( m.isDate( new Date ) ).to.be.true;
        });

        it('should be True when arg is \'new Date()\'', function(){
            expect( m.isDate( new Date() ) ).to.be.true;
        });

        it('should be True when arg is \'new Date("2015-11-09")\'', function(){
            expect( m.isDate( new Date( "2015-11-09" ) ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'"2015-11-09"\'', function(){
            expect( m.isDate( "" ) ).to.be.false;
        });

        it('should be False when arg is \'undefined\'', function(){
            expect( m.isDate( undefined ) ).to.be.false;
        });

        it('should be False when arg is \'null\'', function(){
            expect( m.isDate( null ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function(){
            expect( m.isDate( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'""\'', function(){
            expect( m.isDate( "" ) ).to.be.false;
        });

        it('should be False when arg is \'0\'', function(){
            expect( m.isDate( 0 ) ).to.be.false;
        });

        it('should be False when arg is \'new Function\'', function(){
            expect( m.isDate( new Function ) ).to.be.false;
        });

    });

    describe('isNumber', function() {

        //Positive tests
        it('should be True when arg is \'0\'', function(){
            expect( m.isNumber( 0 ) ).to.be.true;
        });

        it('should be True when arg is \'10\'', function(){
            expect( m.isNumber( 10 ) ).to.be.true;
        });

        it('should be True when arg is \'0.10\'', function(){
            expect( m.isNumber( 0.10 ) ).to.be.true;
        });

        it('should be True when arg is \'-0.10\'', function(){
            expect( m.isNumber( -0.10 ) ).to.be.true;
        });

        it('should be True when arg is \'new Number\'', function(){
            expect( m.isNumber( new Number ) ).to.be.true;
        });

        it('should be True when arg is \'new Number(10)\'', function(){
            expect( m.isNumber( new Number(10) ) ).to.be.true;
        });

        it('should be True when arg is \'NaN\'', function(){
            expect( m.isNumber( NaN ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'"10"\'', function(){
            expect( m.isNumber( "" ) ).to.be.false;
        });

        it('should be False when arg is \'undefined\'', function(){
            expect( m.isNumber( undefined ) ).to.be.false;
        });

        it('should be False when arg is \'null\'', function(){
            expect( m.isNumber( null ) ).to.be.false;
        });

        it('should be False when arg is \'""\'', function(){
            expect( m.isNumber( "" ) ).to.be.false;
        });

        it('should be False when arg is \'new Function\'', function(){
            expect( m.isNumber( new Function ) ).to.be.false;
        });

    });

    describe('isString', function() {

        //Positive tests
        it('should be True when arg is \'""\'', function(){
            expect( m.isString( "" ) ).to.be.true;
        });

        it('should be True when arg is \'"ABCabc897*&^"\'', function(){
            expect( m.isString( "ABCabc897*&^" ) ).to.be.true;
        });

        it('should be True when arg is \'new String\'', function(){
            expect( m.isString( new String ) ).to.be.true;
        });

        it('should be True when arg is \'new String("qwe")\'', function(){
            expect( m.isString( new String( "qwe" ) ) ).to.be.true;
        });

        it('should be True when arg is \'""\'', function(){
            expect( m.isString( "" ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'10\'', function(){
            expect( m.isString( 10 ) ).to.be.false;
        });

        it('should be False when arg is \'undefined\'', function(){
            expect( m.isString( undefined ) ).to.be.false;
        });

        it('should be False when arg is \'false\'', function(){
            expect( m.isString( false ) ).to.be.false;
        });

        it('should be False when arg is \'null\'', function(){
            expect( m.isString( null ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function(){
            expect( m.isString( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'new Date\'', function(){
            expect( m.isString( new Date ) ).to.be.false;
        });

    });

    describe('isFunction', function() {

        //Positive tests
        it('should be True when arg is \'function(){}\'', function(){
            expect( m.isFunction( function(){} ) ).to.be.true;
        });

        it('should be True when arg is \'new Function\'', function(){
            expect( m.isFunction( new Function ) ).to.be.true;
        });

        it('should be True when arg is \'new Function("item", "return item < 100;")\'', function(){
            expect( m.isFunction( new Function( "item", "return item < 100;") ) ).to.be.true;
        });

        var functionExpr = function(){
            console.log("hi there");
        };

        it('should be True when arg is \'isFunction\'', function(){
            expect( m.isFunction( functionExpr ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'""\'', function(){
            expect( m.isFunction( "" ) ).to.be.false;
        });

        it('should be False when arg is \'undefined\'', function(){
            expect( m.isFunction( undefined ) ).to.be.false;
        });

        it('should be False when arg is \'false\'', function(){
            expect( m.isFunction( false ) ).to.be.false;
        });

        it('should be False when arg is \'null\'', function(){
            expect( m.isFunction( null ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function(){
            expect( m.isFunction( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'new Date\'', function(){
            expect( m.isFunction( new Date ) ).to.be.false;
        });

    });

    describe('isUndefined', function() {

        //Positive tests
        it('should be True when arg is \'undefined\'', function(){
            expect( m.isUndefined( undefined ) ).to.be.true;
        });

        it('should be True when arg is variable got set to Undefined by JS interpreter', function(){
            var undefVar;
            expect( m.isUndefined( undefVar ) ).to.be.true;
        });

        it('should be True when arg is variable got set to undefined manually', function(){
            var undefVar = undefined;
            expect( m.isUndefined( undefVar) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'""\'', function(){
            expect( m.isUndefined( "" ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function(){
            expect( m.isUndefined( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'false\'', function(){
            expect( m.isUndefined( false ) ).to.be.false;
        });

        it('should be False when arg is \'null\'', function(){
            expect( m.isUndefined( null ) ).to.be.false;
        });

        it('should be False when arg is \'new Date\'', function(){
            expect( m.isUndefined( new Date ) ).to.be.false;
        });

    });

    describe('isNull', function() {

        //Positive tests
        it('should be True when arg is \'null\'', function(){
            expect( m.isNull( null ) ).to.be.true;
        });

        it('should be True when arg is variable got set to null manually', function(){
            var nullVar = null;
            expect( m.isNull( nullVar ) ).to.be.true;
        });

        //Negative tests
        it('should be False when arg is \'""\'', function(){
            expect( m.isNull( "" ) ).to.be.false;
        });

        it('should be False when arg is \'NaN\'', function(){
            expect( m.isNull( NaN ) ).to.be.false;
        });

        it('should be False when arg is \'false\'', function(){
            expect( m.isNull( false ) ).to.be.false;
        });

        it('should be False when arg is \'new Date\'', function(){
            expect( m.isNull( new Date ) ).to.be.false;
        });

    });

});