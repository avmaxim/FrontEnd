/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */


'use strict';

export default class ArticleCardController {

    /*@ngInject*/
    constructor(ArticleService){
        console.log('articleCard (controller)' );
        this.ArticleService = ArticleService;
        this.isArticleLiked = false;
        if( this.contentSymbolsNumber ){
            this.article.contents = this.article.contents.slice(0, parseInt(this.contentSymbolsNumber)) + '...';
        }
    }

    toggleLike (){
        (this.isArticleLiked = !this.isArticleLiked) ? this.article.likesCount++ : this.article.likesCount--;
        this.ArticleService.upsertArticle( this.article );
    }
}