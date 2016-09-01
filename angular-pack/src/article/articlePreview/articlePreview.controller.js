/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */

'use strict';

export default class ArticlePreviewController {

    /*@ngInject*/
    constructor(ArticleService){
        this.ArticleService = ArticleService;
        this.isArticleLiked = false;
    }

    toggleLike (){
        (this.isArticleLiked = !this.isArticleLiked) ? this.article.likesCount++ : this.article.likesCount--;
        this.ArticleService.upsertArticle( this.article );
    }
}