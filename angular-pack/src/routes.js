/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function config($stateProvider, $urlRouterProvider, $httpProvider, AuthServiceProvider) {

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
                userInfo: () =>  AuthServiceProvider.getUserInfo()
            }
        })

        .state('main.private', {
            abstract: true,
            templateUrl: '/common/views/main.private.html'
        })

        .state('main.private.home', {
            url: '/home',
            templateUrl: '/pages/home/home.html',
            controller: 'hoyeeApp.homeController',
            controllerAs: 'ctrl',
            resolve : {
                userInfo: () =>  AuthServiceProvider.getUserInfo(),
                articles: ['ArticleService', function(ArticleService) {
                    return ArticleService
                                .getAllArticles()
                                .then((articles) =>{
                                    for(let i = 0; i< articles.length; i++){
                                        articles[i].date = new Date(articles[i].timestamp).toDateString();
                                    }
                                    return articles;
                                });
                }]
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
                myArticles: ['ArticleService', function(ArticleService) {
                    return ArticleService.getPersonalArticles();
                }]
            }
        });

    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('HttpHeadersInterceptor');
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'AuthServiceProvider', 'ArticleServiceProvider'];

export default config;