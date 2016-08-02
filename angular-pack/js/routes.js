/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

(function(){ 'use strict';
    
    angular
        .module('hoyeeeApp')
        .config( function( $stateProvider, $urlRouterProvider){
           
            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: '/angular-pack/views/main.html',
                    controller: 'mainController'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: '/angular-pack/views/home.html',
                    controller: 'homeController'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: '/angular-pack/views/register.html',
                    controller: 'registerController'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: '/angular-pack/views/login.html',
                    controller: 'loginController'
                });

            $urlRouterProvider.otherwise('/');
        });
})();