
/**
 * MiniLib Class. Manages TypeChecker & ArraysAPI classes;
 **/

var MiniLib = (function() {

	/**
	 * TypeChecker Class. Implements JS type-check API.
	 **/

	var TypeChecker = (function () {

		function TypeChecker() {
		}

		/*** Implementation ***/
		function isArray(obj) {
			return obj instanceof Array;
		}

		function isBoolean(obj) {
			return (typeof obj === "boolean") ? true : (obj instanceof Boolean);
		}

		function isDate(obj) {
			return (obj instanceof Date);
		}

		function isNumber(obj) {
			return (typeof obj === "number") ? true : (obj instanceof Number);
		}

		function isString(obj) {
			return (typeof obj === "string") ? true : (obj instanceof String);
		}

		function isObject(obj) {
			return obj instanceof Object;
		}

		function isFunction(obj) {
			return (typeof obj === "function") ? true : (obj instanceof Function);
		}

		function isUndefined(obj) {
			return (typeof obj === "undefined");
		}

		function isNull(obj) {
			return (obj === null);
		}

		return {
			isArray : isArray,
			isBoolean : isBoolean,
			isDate : isDate,
			isNumber : isNumber,
			isString : isString,
			isObject : isObject,
			isFunction : isFunction,
			isUndefined : isUndefined,
			isNull : isNull
		}

	})();


	/**
	 * ArraysAPI Class. Implements the most usable API from Array.prototype
	 **/

	var ArraysAPI = (function (TypeChecker) {

		var chainResult = [];


		this.chain = function(chainSequence){
			chainResult = chainSequence;
			this.filter = decorator(this.filter);
			this.take = decorator(this.take);
			this.skip = decorator(this.skip);
			this.map = decorator(this.map);
			return this;
		};

		this.decorator = function(func){
			return function (){
				if (arguments.length == 2){
					return func.apply(this, arguments);
				}else if (arguments.length == 1) {
					chainResult = func.apply(this, [chainResult, arguments[0]]);
					return this;
				}
			}
		};

		this.result = function(){
			return chainResult;
		};

		/*** Implementation ***/
		this.forEach = function(arr, action) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isValidArray: arr,
					isFunction: action
				})) return undefined;

			for (var i = 0; i < arr.length; i++) {
				action(arr[i], i, arr);
			}
		};

		this.filter = function(arr, predicate) {
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: arr,
					isFunction: predicate
				})) return [];

			var resultArray = [];
			for (var i = 0; i < arr.length; i++) {
				if (predicate(arr[i])) {
					resultArray.push(arr[i]);
				}
			}
			return resultArray;
		};

		this.first = function(arr) {
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: arr
				})) return undefined;

			return arr[0];
		};

		this.last = function(arr) {

			if (!areArgumentsValid({
					args: arguments,
					isValidArray: arr
				})) return undefined;

			return arr[arr.length - 1];
		};

		this.take = function(arr, number) {
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: arr,
					isValidNumber: number
				})) return [];

			var resultArray = [];
			for (var i = 0; i < number; i++) {
				resultArray.push(arr[i]);
			}
			return resultArray;
		};

		this.skip = function(arr, number) {
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: arr,
					isValidNumber: number
				})) return [];

			var resultArray = [];

			for (var i = 0; i < arr.length; i++) {
				if (i !== number) {
					resultArray.push(arr[i]);
				}
			}
			return resultArray;
		};


		this.map = function(arr, selector) {
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: arr,
					isFunction: selector
				})) return [];

			var resultArray = [];
			for (var i = 0; i < arr.length; i++) {
				resultArray.push(selector(arr[i]));
			}
			return resultArray;
		};

		this.reduce = function(arr, action, initialPrevValue) {

			if(!areArgumentsValid({
					args: arguments,
					isValidArray: arr,
					isFunction: action
				})) return initialPrevValue;

			var prevValue = null;
			var currentValue = null;
			var startAt = 0;

			if (!TypeChecker.isUndefined(initialPrevValue)) {
				prevValue = initialPrevValue;
				currentValue = arr[0];
			}else{
				prevValue = arr[0];
				currentValue = arr[1];
				startAt = 1;
			}

			var i = startAt;
			while(i < arr.length) {
				if(!TypeChecker.isUndefined(currentValue))
					prevValue = action(prevValue, currentValue, i, arr);
				currentValue = arr[++i];
			}

			return prevValue;
		};

		/*** PRIVATE API ***/
		var areArgumentsValid = function (obj) {
			if (TypeChecker.isUndefined(obj)) return true;

			if (!TypeChecker.isObject(obj)) {
				throw new TypeError("'" + obj + "' must be of Object type.")
			}

			if (!TypeChecker.isUndefined(obj.isRequiredArgsCount) && !TypeChecker.isUndefined(obj.args)) {
				if (obj.args.length < obj.isRequiredArgsCount) {
					throw new RangeError("Function must supply at least " + obj.isRequiredArgsCount + " parameters");
				}
			}

			if (!TypeChecker.isUndefined(obj.isValidArray)) {
				if (!TypeChecker.isArray(obj.isValidArray)) {
					throw new TypeError("'" + obj.isValidArray + "' must be of Array type.");
				}
			}

			if (!TypeChecker.isUndefined(obj.isFunction)) {
				if (!TypeChecker.isFunction(obj.isFunction)) {
					throw new TypeError("'" + obj.isFunction + "' must be of Function type.");
				}
			}

			if (!TypeChecker.isUndefined(obj.isValidArray)) {
				if (obj.isValidArray.length == 0)  return false;
			}

			if (!TypeChecker.isUndefined(obj.isValidNumber) ){
				if(TypeChecker.isNumber(obj.isValidNumber)) {
					if (obj.isValidNumber < 0 || obj.isValidNumber >= obj.isValidArray.length) {
						throw new RangeError("'" + obj.isValidNumber + "' is out of range.");
					}
				}else{
					throw new TypeError("'" + obj.isValidNumber + "' is must be of Number type");
				}
			}

			return true;
		};
		return {
			forEach : this.forEach,
			filter : this.filter,
			first: this.first,
			last : this.last,
			map : this.map,
			skip : this.skip,
			take : this.take,
			reduce : this.reduce,
			result: this.result,
			chain: this.chain
		}
	})(TypeChecker);

	return {
		ArraysAPI: ArraysAPI,
		TypeChecker: TypeChecker
	};
})();
