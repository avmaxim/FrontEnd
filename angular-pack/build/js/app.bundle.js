webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('hoyeeeApp', ['custom', 'libs']);
	
	    angular.module('custom', ['controllers']);
	    angular.module('libs', ['ui.router']);
	
	    angular.module('controllers', ['mainControllerModule', 'homeControllerModule', 'registerControllerModule', 'loginControllerModule']);
	})();
	
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
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
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('mainControllerModule', []).controller('mainController', [mainController]);
	
	    function mainController() {
	        var vm = this;
	    }
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('homeControllerModule', []).controller('homeController', [homeController]);
	
	    function homeController() {
	        var vm = this;
	    }
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('loginControllerModule', []).controller('loginController', [loginController]);
	
	    function loginController() {
	        var vm = this;
	    }
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by andrei.maksimchanka on 8/2/2016.
	 */
	
	(function () {
	    'use strict';
	
	    angular.module('registerControllerModule', []).controller('registerController', [registerController]);
	
	    function registerController() {
	        var vm = this;
	    }
	})();

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map