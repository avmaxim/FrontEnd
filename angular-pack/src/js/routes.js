/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function config($stateProvider, $urlRouterProvider) {
/*
    $stateProvider
        .state('main', {
            abstract: true,
            template: "common start <div ui-view></div> common end"
        })
        .state('main.public', {
            abstract: true,
            template: "public start <div ui-view></div> public end"
        })
        .state('main.public.home', {
            url: '/',
            template: "this is home"
        })
        .state('main.private', {
            abstract: true,
            template: "private start <div ui-view></div> private end"
        })
        .state('main.private.dashboard', {
            url: '/dashboard',
            template: "this is dashboard"
        });*/

    $stateProvider
        .state('main', {
            url: '',
            views: {
                '' :{
                    templateUrl: '/views/welcome.html'
                },
                'header': {
                    templateProvider: function ($timeout, $window) {
                        return $timeout(() => {
                            let userInfo = $window.localStorage.getItem('user-info');
                            return userInfo ? '<header-public></header-public>' : '<header-private></header-private>'
                        }, 100);
                    }
                }
            }
        })

        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'hoyeeApp.homeController',
            controllerAs: 'vm'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'hoyeeApp.registerController',
            controllerAs: 'vm'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'hoyeeApp.loginController',
            controllerAs: 'vm'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;