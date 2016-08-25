/**
 * Created by andrei on 8/19/2016.
 */
 
export default class ArticleOptionsController {
    /*@ngInject*/
    constructor( $state, ArticleService ){
        this.$state = $state;
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
        let answer = confirm("R u sure u wanna remove this article?");
        if(!answer){
            return;
        }
        this.ArticleService
            .removeArticle( this.article )
            .then(()=>{
                alert('Article successfully removed!');
                this.$state.go('main.private.myarticles');
            })
    };
 
    postArticle () {
        this.article.isPosted = true;
        this.ArticleService
            .upsertArticle( this.article )
            .then(()=> {
                alert('Article successfully updated!')
            })
    };
}