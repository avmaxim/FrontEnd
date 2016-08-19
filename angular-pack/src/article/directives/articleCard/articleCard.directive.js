/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */
'use strict';

function ArticleCardDirective(){
    return {
        restrict: 'E',
        templateUrl: '/article/directives/articleCard/article-card.html',
        controller: 'articleCardController',
        controllerAs: 'ctrl',
        scope: true,
        bindToController: {
            article: '=',
            contentSymbolsNumber: '@'
        }
    };
}

export default ArticleCardDirective;