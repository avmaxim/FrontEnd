/**
 * Created by andrei on 8/19/2016.
 */

ArticleOptionsController.$inject = ['$state', 'ArticleService'];
 
export default function ArticleOptionsController( $state, ArticleService ) {

    this.previewArticle = () => {
        const stateParams = {
            articleId: this.article.articleId,
            userId: this.article.userId
        };
        $state.go('main.private.preview', stateParams);
    };

    this.editArticle = () => {
        const stateParams = {
            articleId: this.article.articleId
        };
        $state.go('main.private.upsert', stateParams);
    };

    this.removeArticle = () => {
        ArticleService
            .removeArticle( this.article )
            .then(()=>{
                alert('Article successfully removed!')
            })
    };

    this.postArticle = () => {
        this.article.isPosted = true;
        ArticleService
            .upsertArticle( this.article )
            .then(()=> {
                alert('Article successfully updated!')
            })
    };
}