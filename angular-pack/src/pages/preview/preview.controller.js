/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function PreviewArticleController( $state, $stateParams, ArticleService ){
    let ctrl = this;

    if ( !$stateParams['articleId'] )
        return;

    ArticleService.getArticleById( $stateParams['articleId'] )
                    .then( article => ctrl.article = article )
                    .catch( handleErrors );

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

PreviewArticleController.$inject = ['$state', '$stateParams', 'ArticleService'];

export default PreviewArticleController;