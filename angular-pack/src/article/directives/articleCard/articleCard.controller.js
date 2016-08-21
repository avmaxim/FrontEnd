/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */


'use strict';

ArticleCardController.$inject = ['ArticleService'] ;

function ArticleCardController(ArticleService){
    let ctrl = this;
    ctrl.isArticleLiked = false;
    ctrl.article.contents = ctrl.contentSymbolsNumber ? ctrl.article.contents.slice(0, parseInt(ctrl.contentSymbolsNumber)) + '...' :  ctrl.article.contents;
    ctrl.toggleLike = toggleLike;

    function toggleLike(){
        (ctrl.isArticleLiked = !ctrl.isArticleLiked) ? ctrl.article.likesCount++ : ctrl.article.likesCount--;
        ArticleService.upsertArticle( ctrl.article );
    }
}

export default ArticleCardController;