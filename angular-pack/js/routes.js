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

export default config;