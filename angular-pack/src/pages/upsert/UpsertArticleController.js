/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function UpsertArticleController($state, $stateParams, $timeout){
    let vm = this;
    vm.submit = submit;

    if ($stateParams['articleId'] ){
        //getting article from server
        vm.article = { header: 'Cool article', contents: 'This article\'s about different stuff like ...'};
    } else {
        vm.article = { header: '', contents: ''};
    }

    function submit(){
        //simulate connection to server
        $timeout(() => {
            alert('Your article successfully saved. ');
            $state.go('main.private.myarticles');
        }, 2000);
    } 

}

UpsertArticleController.$inject = ['$state', '$stateParams', '$timeout'];

export default UpsertArticleController;