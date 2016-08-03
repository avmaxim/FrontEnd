webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(1);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _app = __webpack_require__(2);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hoyeeApp = 'hoyeeApp';
	
	var app = angular.module(hoyeeApp, ['ui.router', _app2.default]).config(_routes2.default);
	
	exports.default = hoyeeApp;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	function config($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('main', {
	        url: '',
	        templateUrl: '/angular-pack/views/main.html'
	    }).state('home', {
	        url: '/home',
	        templateUrl: '/angular-pack/views/home.html'
	    }).state('register', {
	        url: '/register',
	        templateUrl: '/angular-pack/views/register.html'
	    }).state('login', {
	        url: '/login',
	        templateUrl: '/angular-pack/views/login.html'
	    });
	
	    $urlRouterProvider.otherwise('/');
	}
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	exports.default = config;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _MainController = __webpack_require__(3);
	
	var _MainController2 = _interopRequireDefault(_MainController);
	
	var _HomeController = __webpack_require__(4);
	
	var _HomeController2 = _interopRequireDefault(_HomeController);
	
	var _RegisterController = __webpack_require__(5);
	
	var _RegisterController2 = _interopRequireDefault(_RegisterController);
	
	var _LoginController = __webpack_require__(6);
	
	var _LoginController2 = _interopRequireDefault(_LoginController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrei.maksimchanka on 8/3/2016.
	 */
	
	var controllersModule = 'hoyeeApp.controllers';
	
	angular.module(controllersModule, []).controller('hoyeeApp.homeController', _HomeController2.default).controller('hoyeeApp.mainController', _MainController2.default).controller('hoyeeApp.registerController', _RegisterController2.default).controller('hoyeeApp.loginController', _LoginController2.default);
	
	exports.default = controllersModule;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function MainController() {
	  var vm = this;
	}
	
	exports.default = MainController;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function HomeController($http) {
	  var vm = this;
	}
	
	HomeController.$inject = ['$http'];
	
	exports.default = HomeController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function RegisterController() {
	  var vm = this;
	}
	
	exports.default = RegisterController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function LoginController() {
	  var vm = this;
	}
	
	exports.default = LoginController;

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map