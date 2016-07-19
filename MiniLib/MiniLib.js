
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

		var chainResult;

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
			var correctedArgs = {};
			if(TypeChecker.isFunction(arr)) {
				correctedArgs = { arr: chainResult, predicate: arr};
			} else {
				correctedArgs = { arr: arr, predicate: predicate};
			}

			if (!areArgumentsValid({
					args: arguments,
					isValidArray: correctedArgs.arr,
					isFunction: correctedArgs.predicate
				})) return;

			var resultArray = [];

			for (var i = 0; i < correctedArgs.arr.length; i++) {
				if (correctedArgs.predicate(correctedArgs.arr[i])) {
					resultArray.push(correctedArgs.arr[i]);
				}
			}

			chainResult = resultArray;
			return this;
		}

		function first(arr) {
			var correctedArgs = {};

			if(TypeChecker.isUndefined(arr)) {
				correctedArgs = { arr: chainResult};
			} else {
				correctedArgs = { arr: arr};
			}
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: correctedArgs.arr
				})) return;

			return correctedArgs.arr[0];
		}

		function last(arr) {
			var correctedArgs = {};

			if(TypeChecker.isUndefined(arr)) {
				correctedArgs = { arr: chainResult};
			} else {
				correctedArgs = { arr: arr};
			}
			if (!areArgumentsValid({
					args: arguments,
					isValidArray: correctedArgs.arr
				})) return;

			return correctedArgs.arr[correctedArgs.arr.length - 1];
		}

		function take(arr, number) {
			var correctedArgs = {};

			if(TypeChecker.isNumber(arr)) {
				correctedArgs = { arr: chainResult, number: arr};
			} else {
				correctedArgs = { arr: arr, number: number};
			}

			if (!areArgumentsValid({
					args: arguments,
					isValidArray: correctedArgs.arr,
					isValidNumber: correctedArgs.number
				})) return;

			var resultArray = [];
			for (var i = 0; i < correctedArgs.number; i++)
				resultArray.push(correctedArgs.arr[i]);

			chainResult = resultArray;
			return this;
		}

		function skip(arr, number) {
			var correctedArgs = {};

			if(TypeChecker.isNumber(arr)) {
				correctedArgs = { arr: chainResult, number: arr};
			} else {
				correctedArgs = { arr: arr, number: number};
			}

			if (!areArgumentsValid({
					args: arguments,
					isValidArray: correctedArgs.arr,
					isValidNumber: correctedArgs.number
				})) return;

			var resultArray = [];

			for (var i = 0; i < correctedArgs.arr.length; i++) {
				if (i !== correctedArgs.number) {
					resultArray.push(correctedArgs.arr[i]);
				}
			}
			chainResult = resultArray;
			return this;
		}


		function map(arr, selector) {
			var correctedArgs = {};

			if(TypeChecker.isFunction(arr)) {
				correctedArgs = { arr: chainResult, selector: arr};
			} else {
				correctedArgs = { arr: arr, selector: selector};
			}

			if (!areArgumentsValid({
					args: arguments,
					isValidArray: correctedArgs.arr,
					isFunction: correctedArgs.selector
				})) return;

			var resultArray = [];
			for (var i = 0; i < correctedArgs.arr.length; i++) {
				resultArray.push(correctedArgs.selector(correctedArgs.arr[i]));
			}
			chainResult = resultArray;
			return this;
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
				if (TypeChecker.isNumber(initialPrevValue)) {
					prevValue = initialPrevValue;
				}else{
					throw new TypeError("'" + initialPrevValue + "' is must be of Number type");
				}
			}

			for (var i = 0; i < arr.length; i++) {
				prevValue = action(prevValue, arr[i], i, arr);
			}

			return prevValue;
		}


		function result(){
			return chainResult;
		}

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
			forEach : forEach,
			filter :filter,
			first: first,
			last : last,
			map : map,
			skip : skip,
			take : take,
			reduce : reduce,
			result: result
		}
	})(TypeChecker);

	return {
		ArraysAPI: ArraysAPI,
		TypeChecker: TypeChecker
	};
})();
