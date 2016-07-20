
/**
 * MiniLib (ML) Class.
 * 1) Implements JS type-check API.
 * 2) Implements the most usable API from Array.prototype
 **/

var m = (function() {

	var TYPE = {
		BOOLEAN : 0,
		FUNCTION: 1,
		ARRAY: 2,
		DATE: 3,
		STRING: 4,
		NUMBER: 5,
		UNDEFINED: 6,
		NULL: 7,
		OBJECT: 8
	};

	/*** Private API Implementation ***/

	function tryValidateArgs (args, expectedTypes) {

		if (isUndefined(expectedTypes))
			throw new ReferenceError("Argument 'expectedTypes' is not defined.");

		for(var i = 0, currentArg = args[i]; i < expectedTypes.length; currentArg = args[ ++i ]){

			if (isUndefined(currentArg))
				throw new ReferenceError("Argument " + currentArg + " is not defined.");

			switch(expectedTypes[i]){
				case TYPE.ARRAY:
				{
					if (!isArray(currentArg)) {
						throw new TypeError("'" + currentArg + "' must be of Array type.");
					}
					break;
				}
				case TYPE.FUNCTION:
				{
					if (!isFunction(currentArg)) {
						throw new TypeError("'" + currentArg + "' must be of Function type.");
					}
					break;
				}
				case TYPE.NUMBER:
				{
					if (!isNumber(currentArg)) {
						throw new TypeError("'" + currentArg + "' is must be of Number type");
					}
					break;
				}
			}
		}
	}

	/*** Public API Implementation ***/

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

	function chain(array){ // chainLE -> {chainArray: [], resultObj: {}, decorator: function(){} }
		var chainArray = array,
			resultObj = {
				result: function() { // [[Scope]] -> chainLE;  resultLE -> {}
							return chainArray;
						}
			};

		resultObj.filter = decorator(filter);
		resultObj.map = decorator(map);
		resultObj.take = decorator(take);
		resultObj.skip = decorator(skip);

		function decorator (func){ // [[Scope]] -> chainLE; decoratorLE -> {func: function(){}, anonym: function(){} }
			return function (){ // [[Scope]] -> decoratorLE; anonymLE -> {args: arguments}
				var argsArray = [].slice.call(arguments);
				argsArray.unshift(chainArray);
				chainArray = func.apply(null, argsArray);
				return resultObj;
			}
		}

		return resultObj;
	}

	function forEach(arr, action) {
		tryValidateArgs(arguments, [TYPE.ARRAY, TYPE.FUNCTION]);

		for (var i = 0; i < arr.length; i++) {
			action(arr[i], i, arr);
		}
	}

	function filter(arr, predicate) {
		tryValidateArgs(arguments, [TYPE.ARRAY, TYPE.FUNCTION]);

		var resultArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (predicate(arr[i])) {
				resultArray.push(arr[i]);
			}
		}

		return resultArray;
	}

	function first (arr) {
		tryValidateArgs(arguments, [TYPE.ARRAY]);
		return arr[0];
	}

	function last (arr) {
		tryValidateArgs(arguments, [TYPE.ARRAY]);
		return arr[ arr.length - 1 ];
	}

	function take (arr, number) {
		tryValidateArgs(arguments, [TYPE.ARRAY, TYPE.NUMBER]);

		if (number < 0 || number >= arr.length)
			throw new RangeError(number + " is out of range (0, " + arr.length + "); ");

		var resultArray = [];
		for (var i = 0; i < number; i++) {
			resultArray.push( arr[i] );
		}

		return resultArray;
	}

	function skip(arr, number) {
		tryValidateArgs(arguments, [TYPE.ARRAY, TYPE.NUMBER]);

		if (number < 0 || number >= arr.length)
			throw new RangeError(number + " is out of range (0, " + arr.length + "); ");

		var resultArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (i !== number) {
				resultArray.push( arr[i] );
			}
		}

		return resultArray;
	}


	function map(arr, selector) {
		tryValidateArgs(arguments, [TYPE.ARRAY, TYPE.FUNCTION]);

		var resultArray = [];
		for (var i = 0; i < arr.length; i++) {
			resultArray.push( selector( arr[i] ) );
		}

		return resultArray;
	}

	function reduce(arr, action, initialPrevValue) {
		tryValidateArgs(arguments, [TYPE.ARRAY, TYPE.FUNCTION]);

		/* JS spec on 'reduce' requires the following check: */
		if (arr.length == 0 && isUndefined(initialPrevValue)) {
			throw new TypeError("Both Array Length is 0 and initialPrevValue is undefined");
		}
		else if ( arr.length == 1 && isUndefined(initialPrevValue)){
			return arr[0];
		}
		else if (arr.length == 0 && !isUndefined(initialPrevValue)) {
			return initialPrevValue;
		}

		var prevValue = null;
		var currentValue = null;
		var startAt = 0;

		if (!isUndefined(initialPrevValue)) {
			prevValue = initialPrevValue;
			currentValue = arr[0];
		}
		else {
			prevValue = arr[0];
			currentValue = arr[1];
			startAt = 1;
		}

		var i = startAt;
		while(i < arr.length) {
			if(!isUndefined(currentValue) && !isUndefined(prevValue)) {
				prevValue = action(prevValue, currentValue, i, arr);
			}
			currentValue = arr[ ++i ];
		}

		return prevValue;
	}

	exportObject = {
		forEach : forEach,
		filter : filter,
		first: first,
		last : last,
		map : map,
		skip : skip,
		take : take,
		reduce : reduce,
		chain: chain,
		isArray : isArray,
		isBoolean : isBoolean,
		isDate : isDate,
		isNumber : isNumber,
		isString : isString,
		isObject : isObject,
		isFunction : isFunction,
		isUndefined : isUndefined,
		isNull : isNull,
		TYPE: TYPE
	};

	return exportObject;
})();
