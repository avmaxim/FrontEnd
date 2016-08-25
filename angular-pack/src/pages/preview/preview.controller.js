/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class PreviewArticleController {
    constructor( $stateParams, ArticleService ){
        if ( $stateParams['articleId'] && $stateParams['userId']) {
            ArticleService
                .getArticleById($stateParams['articleId'], $stateParams['userId'])
                .then(article => this.article = article )
        } else {
            // Logic for previewing article that hasn't been created yet. Navigated from Upsert page.
            // Not implemented yet
        }
    }
}

PreviewArticleController.$inject = ['$stateParams', 'ArticleService'];
