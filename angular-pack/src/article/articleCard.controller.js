/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */


'use strict';

ArticleCardController.$inject = ['ArticleService'] ;

function ArticleCardController(ArticleService){
    let ctrl = this;
    ctrl.isArticleLiked = false;
    ctrl.toggleLike = toggleLike;
    ctrl.article.contents = ctrl.contents ? ctrl.article.contents.slice(0, parseInt(ctrl.contents)) + '...' :  ctrl.article.contents;

    function toggleLike(){
        (ctrl.isArticleLiked = !ctrl.isArticleLiked) ? ctrl.article.likesCount++ : ctrl.article.likesCount--;
        ArticleService.upsertArticle( ctrl.article );
    }
}

export default ArticleCardController;