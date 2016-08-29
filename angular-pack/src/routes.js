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

        /*** Public states ***/

        .state('main.public', {
            abstract: true,
            templateUrl: '/common/views/main.public.html',
            data: {
                requiresAuthorization: false
            }
        })

        .state('main.public.register', {
            url: '/register',
            templateUrl: '/auth/registration/register.html',
            controller: 'hoyeeApp.registerController',
            controllerAs: 'ctrl'
        })

        .state('main.public.login', {
            url: '/login',
            templateUrl: '/auth/login/login.html',
            controller: 'hoyeeApp.loginController',
            controllerAs: 'ctrl'
        })

        .state('main.public.welcome', {
            url: '/welcome',
            templateUrl: '/pages/welcome/welcome.html'
        })

        /*** Private states ***/

        .state('main.private', {
            abstract: true,
            templateUrl: '/common/views/main.private.html',
            data: {
                requiresAuthorization: true
            }
        })

        .state('main.private.home', {
            url: '/',
            templateUrl: '/pages/home/home.html',
            controller: 'hoyeeApp.homeController',
            controllerAs: 'ctrl',
            resolve : {
                articles: ['ArticleService', function(ArticleService) {
                    return ArticleService.getAllArticles();
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
            templateUrl: '/pages/myarticles/my-articles.html',
            controller: 'hoyeeApp.myArticlesController',
            controllerAs: 'ctrl',
            resolve: {
                myArticles: ['ArticleService', function(ArticleService) {
                    return ArticleService.getPersonalArticles();
                }]
            }
        })

        .state('main.private.preview', {
            url: '/article/preview/:articleId/:userId',
            templateUrl: '/pages/preview/preview.html',
            controller: 'hoyeeApp.previewArticleController',
            controllerAs: 'ctrl',
            resolve: {
                article: ['ArticleService', '$stateParams', function(ArticleService, $stateParams){
                    if ( $stateParams['articleId'] && $stateParams['userId']) {
                        return ArticleService.getArticleById( $stateParams['articleId'], $stateParams['userId']);
                    }
                }]
            }
        });

    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('HttpHeadersInterceptor');
    $httpProvider.interceptors.push('HttpServerErrorsInterceptor');
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'AuthServiceProvider'];

export default config;