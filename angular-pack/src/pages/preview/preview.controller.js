/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function PreviewArticleController( $state, $stateParams, ArticleService ){
    let ctrl = this;

    if ( !$stateParams['articleId'] && !$stateParams['userId']){
        //Logic for previewing article that hasn't been created yet. Navigated from Upsert page.
    } else {
        ArticleService
            .getArticleById($stateParams['articleId'], $stateParams['userId'])
            .then(article => ctrl.article = article)
    }
}

PreviewArticleController.$inject = ['$state', '$stateParams', 'ArticleService'];

export default PreviewArticleController;