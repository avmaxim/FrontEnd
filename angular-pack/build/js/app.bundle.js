webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('hoyeeeApp', ['custom', 'libs']);
	
	    angular.module('custom', ['controllers']);
	    angular.module('libs', ['ui.router']);
	
	    if (process.env['NODE_ENV'] == 'development') {
	        alert('debugging');
	        debugger;
	    }
	
	    angular.module('controllers', ['mainControllerModule', 'homeControllerModule', 'registerControllerModule', 'loginControllerModule']);
	})();
	
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    } else {
	        return cachedSetTimeout.call(null, fun, 0);
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        clearTimeout(marker);
	    } else {
	        cachedClearTimeout.call(null, marker);
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('hoyeeeApp').config(function ($stateProvider, $urlRouterProvider) {
	
	        $stateProvider.state('main', {
	            url: '',
	            templateUrl: '/angular-pack/views/main.html',
	            controller: 'mainController'
	        }).state('home', {
	            url: '/home',
	            templateUrl: '/angular-pack/views/home.html',
	            controller: 'homeController'
	        }).state('register', {
	            url: '/register',
	            templateUrl: '/angular-pack/views/register.html',
	            controller: 'registerController'
	        }).state('login', {
	            url: '/login',
	            templateUrl: '/angular-pack/views/login.html',
	            controller: 'loginController'
	        });
	
	        $urlRouterProvider.otherwise('/');
	    });
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('mainControllerModule', []).controller('mainController', [mainController]);
	
	    function mainController() {
	        let vm = this;
	    }
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('homeControllerModule', []).controller('homeController', [homeController]);
	
	    function homeController() {
	        let vm = this;
	    }
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('loginControllerModule', []).controller('loginController', [loginController]);
	
	    function loginController() {
	        let vm = this;
	    }
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('registerControllerModule', []).controller('registerController', [registerController]);
	
	    function registerController() {
	        let vm = this;
	    }
	})();

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map