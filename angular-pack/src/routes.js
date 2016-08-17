/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function config($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: '/common/views/main.html'
        })

        .state('main.public', {
            abstract: true,
            templateUrl: '/common/views/main.public.html'
        })

        .state('main.public.register', {
            url: '/register',
            templateUrl: '/auth/registration/register.html',
            controller: 'hoyeeApp.registerController',
            controllerAs: 'vm'
        })

        .state('main.public.login', {
            url: '/login',
            templateUrl: '/auth/login/login.html',
            controller: 'hoyeeApp.loginController',
            controllerAs: 'vm'
        })

        .state('main.public.welcome', {
            url: '/',
            templateUrl: '/pages/welcome/welcome.html',
            controller: 'hoyeeApp.welcomeController',
            controllerAs: 'vm',
            resolve : {
                userInfo: () =>  JSON.parse( localStorage.getItem("user-info") )
            },
        })

        .state('main.private', {
            abstract: true,
            templateUrl: '/common/views/main.private.html'
        })

        .state('main.private.home', {
            url: '/home',
            templateUrl: '/pages/home/home.html',
            controller: 'hoyeeApp.homeController',
            controllerAs: 'vm',
            resolve : {
                userInfo: () =>  JSON.parse( localStorage.getItem("user-info") )
            }
        })

        .state('main.private.upsert', {
            url: '/article/upsert/:articleId',
            templateUrl: '/pages/upsert/upsert.html',
            controller: 'hoyeeApp.upsertArticleController',
            controllerAs: 'ctrl'
        })

        .state('main.private.myarticles', {
            url: '/myarticles',
            templateUrl: '/pages/myarticles/myarticles.html',
            controller: 'hoyeeApp.myArticlesController',
            controllerAs: 'ctrl',
            resolve: {
                myArticles: ['$http', 'urls', function($http, urls) {
                    return $http.get( urls.ARTICLES_GET_PERSONAL ).then( (response) => {
                        let responseData = response.data;
                        if ( responseData.success ){
                            return JSON.parse(responseData.data["articles"]);
                        } else {
                            console.error(responseData.message);
                            return null;
                        }
                    });
                }]
            }
        });

    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('HttpHeadersInterceptor');
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

export default config;