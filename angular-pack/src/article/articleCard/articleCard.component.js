/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */
'use strict';

let ArticleCardComponent = {
    templateUrl: '/article/articleCard/article-card.html',
    controller: 'articleCardController',
    bindings: {
        article: '=datasource',
        hasOptions: '=enableOptions',
        contentSymbolsNumber: '@'
    }
};

export default ArticleCardComponent;
