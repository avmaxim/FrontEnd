/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class UpsertArticleController {

    /*ngInject*/
    constructor($state, $stateParams, $uibModal, ArticleService){
        this.$state = $state;
        this.$uibModal = $uibModal;
        this.$stateParams = $stateParams;
        this.ArticleService = ArticleService;
        if ( $stateParams['articleId'] ) {                               //Update article mode
            this.ArticleService
                .getArticleById( this.$stateParams['articleId'] )
                .then( article => this.article = article )
        } else {
            this.article = {header: '', contents: '' };                  //Create new article mode
        }
    }

    upsert (){
        this.article.timestamp = new Date().getTime(); 
        this.ArticleService
            .upsertArticle( this.article )
            .then( () => {
                this.$uibModal
                    .open({ component: 'articleSaveSuccessModalComponent' })
                    .result.then((ok)=>{
                        this.$state.go('main.private.myarticles');
                    });
            });
    }
}