/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */


'use strict';

export default class ArticleCardController {

    /*@ngInject*/
    constructor(ArticleService){
        this.ArticleService = ArticleService;
        this.isArticleLiked = false;
        if( this.contentSymbolsNumber ){
            this.article.summary = ArticleCardController.getHtmlAsText( this.article.contents ).slice(0, parseInt(this.contentSymbolsNumber)) + '...';
        }
    }

    toggleLike (){
        (this.isArticleLiked = !this.isArticleLiked) ? this.article.likesCount++ : this.article.likesCount--;
        this.ArticleService.upsertArticle( this.article );
    }

    static getHtmlAsText(text){
        return text.replace(/<(?:.|\n)*?>/gm, '').replace(/\s+/gm, ' ');
    }
}