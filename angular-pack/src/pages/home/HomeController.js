/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function HomeController($state, userInfo, articles){
    let vm = this;
    if ( !userInfo ) {
        $state.go('main.public.welcome');
    }
    vm.articles = articles;
}

HomeController.$inject = ['$state', 'userInfo', 'articles'];

export default HomeController;