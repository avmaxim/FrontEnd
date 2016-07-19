
/**
 * MiniLib Class. Manages TypeChecker & ArraysAPI classes;
 **/

var MiniLib = (function() {

	function MiniLib() {}

	/**
	 * TypeChecker Class. Implements JS type-check API.
	 **/

	MiniLib.TypeChecker = (function () {

		function TypeChecker() {
		}

		/*** Public API ***/
		TypeChecker.isArray = isArray;
		TypeChecker.isBoolean = isBoolean;
		TypeChecker.isDate = isDate;
		TypeChecker.isNumber = isNumber;
		TypeChecker.isString = isString;
		TypeChecker.isObject = isObject;
		TypeChecker.isFunction = isFunction;
		TypeChecker.isUndefined = isUndefined;
		TypeChecker.isNull = isNull;

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

		return TypeChecker;

	})();


	/**
	 * ArraysAPI Class. Implements the most usable API from Array.prototype
	 **/

	MiniLib.ArraysAPI = (function (TypeChecker) {

		function ArraysAPI() {}

		/*** Public API ***/
		ArraysAPI.forEach = forEach;
		ArraysAPI.filter = filter;
		ArraysAPI.first = first;
		ArraysAPI.last = last;
		ArraysAPI.map = map;
		ArraysAPI.skip = skip;
		ArraysAPI.take = take;
		ArraysAPI.reduce = reduce;

		/*** Implementation ***/
		function forEach(arr, action) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isValidArray: arr,
					isFunction: action
				})) return;

			for (var i = 0; i < arr.length; i++) {
				action(arr[i], i, arr);
			}

		}

		function filter(arr, predicate) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isValidArray: arr,
					isFunction: predicate
				})) return;

			var resultArray = [];

			for (var i = 0; i < arr.length; i++) {
				if (predicate(arr[i])) {
					resultArray.push(arr[i]);
				}
			}
			return resultArray;
		}

		function first(arr) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 1,
					isValidArray: arr
				})) return;

			return arr[0];
		}

		function last(arr) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 1,
					isValidArray: arr
				})) return;

			return arr[arr.length - 1];
		}

		function take(arr, number) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isValidNumber: number
				})) return;

			var resultArray = [];
			for (var i = 0; i < number; i++)
				resultArray.push(arr[i]);

			return resultArray;
		}

		function skip(arr, number) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isValidArray: arr,
					isValidNumber: number
			}))

			var resultArray = [];

			for (var i = 0; i < arr.length; i++) {
				if (i !== number) {
					resultArray.push(arr[i]);
				}
			}
			return resultArray;
		}


		function map(arr, selector) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isArray: arr,
					isFunction: selector
				})) return;

			var resultArray = [];
			for (var i = 0; i < arr.length; i++) {
				resultArray.push(selector(arr[i]));
			}
			return resultArray;
		}

		function reduce(arr, action, initialPrevValue) {
			if(!areArgumentsValid({
					args: arguments,
					isRequiredArgsCount: 2,
					isValidArray: arr,
					isFunction: action
				})) return;

			var prevValue = 0;

			if (!TypeChecker.isUndefined(initialPrevValue)) {
				prevValue = initialPrevValue;
			}

			for (var i = 0; i < arr.length; i++) {
				prevValue = action(prevValue, arr[i], i, arr);
			}

			return prevValue;
		}

		/*** PRIVATE API ***/
		var areArgumentsValid = function (obj) {
			if (TypeChecker.isUndefined(obj)) return true;

			if (!TypeChecker.isObject(obj)) {
				throw new TypeError("'" + obj + "' must be of Object type.")
			}

			if (!TypeChecker.isUndefined(obj.isRequiredArgsCount) && !TypeChecker.isUndefined(obj.args)) {
				if (obj.args.length < obj.isRequiredArgsCount) {
					throw new ReferenceError("Function must supply at least " + obj.isRequiredArgsCount + " parameters");
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
				if(!TypeChecker.isNumber(obj.isValidNumber))
					if (obj.isValidNumber < 0 || obj.isValidNumber >= obj.isValidArray.length) {
						throw new RangeError("'" + obj.isValidNumber + "' is out of range.");
					}
			}

			return true;
		};
		return ArraysAPI;
	})(MiniLib.TypeChecker);

	return MiniLib;
})();
