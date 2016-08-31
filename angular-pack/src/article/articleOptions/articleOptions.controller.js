/**
 * Created by andrei on 8/19/2016.
 */
 
export default class ArticleOptionsController {
    /*@ngInject*/
    constructor( $state, $uibModal, ArticleService ){
        this.$state = $state;
        this.$uibModal = $uibModal;
        this.ArticleService = ArticleService;
    }
    
    previewArticle () {
        const stateParams = {
            articleId: this.article.articleId,
            userId: this.article.userId
        };
        this.$state.go('main.private.preview', stateParams);
    }; 

    editArticle () {
        const stateParams = {
            articleId: this.article.articleId
        };
        this.$state.go('main.private.upsert', stateParams);
    };

    removeArticle () {
        this.$uibModal
            .open({ component: 'removeArticleModalComponent' })
            .result.then( (ok) => {
                this.ArticleService
                    .removeArticle( this.article )
                    .then(()=>{
                        this.$state.reload();
                    })
            });
    };
 
    postArticle () {
        this.$uibModal
            .open({ component: 'postArticleModalComponent' })
            .result.then( (ok) => {
                this.article.isPosted = true;
                this.ArticleService.postArticle( this.article );
            });

    };
}