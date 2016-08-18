/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function UpsertArticleController($state, $stateParams, ArticleService){
    let ctrl = this;
    ctrl.upsert = upsert;

    if ( !$stateParams['articleId'] ) {                                                                                 //Create new article mode
        ctrl.article = {header: '', contents: '', };
    } else {                                                                                                            //Update article mode
        ArticleService.getArticleById( $stateParams['articleId'] )
                        .then( article => ctrl.article = article )
                        .catch( handleErrors );
    }

    function upsert(){
        ctrl.article.timestamp = new Date().getTime();
        ArticleService.upsertArticle( ctrl.article )
                        .then( () => {
                            alert('Your article successfully saved.');
                            $state.go('main.private.myarticles');
                        })
                        .catch( handleErrors );
    }

    function handleErrors(error){
        if ( error.status == 400 ) {
            console.error( error.message );
            $state.go('main.private.upsert');
        }else if ( error.status == 401 ) {
            alert("Sorry, it seems u ain't authorized. Please, login or register before u continue.");
            console.error( error.message );
            $state.go('main.public.login');
        }
    }

}

UpsertArticleController.$inject = ['$state', '$stateParams', 'ArticleService'];

export default UpsertArticleController;