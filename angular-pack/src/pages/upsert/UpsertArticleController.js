/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function UpsertArticleController($stateParams){
    let vm = this;
    if (!$stateParams['articleId'] )
        console.log('create');
    else
        console.log('edit');

}

UpsertArticleController.$inject = ['$stateParams'];

export default UpsertArticleController;