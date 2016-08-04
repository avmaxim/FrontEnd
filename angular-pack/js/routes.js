/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */


function config($stateProvider, $urlRouterProvider) {
    let viewsDir = '/angular-pack/views/';

    $stateProvider
        .state('main', {
            url: '',
            templateUrl: viewsDir + 'main.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: viewsDir + 'home.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: viewsDir + 'register.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: viewsDir + 'login.html'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;