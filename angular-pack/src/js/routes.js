/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */


function config($stateProvider, $urlRouterProvider) {
    let templates = '/views/';

    $stateProvider
        .state('main', {
            url: '',
            templateUrl: templates + 'main.html',
            controller: 'hoyeeApp.mainController',
            controllerAs: 'vm'
        })
        .state('home', {
            url: '/home',
            templateUrl: templates + 'home.html',
            controller: 'hoyeeApp.homeController',
            controllerAs: 'vm'
        })
        .state('register', {
            url: '/register',
            templateUrl: templates + 'register.html',
            controller: 'hoyeeApp.registerController',
            controllerAs: 'vm'
        })
        .state('login', {
            url: '/login',
            templateUrl: templates + 'login.html',
            controller: 'hoyeeApp.loginController',
            controllerAs: 'vm'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;