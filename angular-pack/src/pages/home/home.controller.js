/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function HomeController($state, userInfo, articles){
    userInfo || $state.go('main.public.welcome');
    let ctrl = this;
    ctrl.articles = articles;
}

HomeController.$inject = ['$state', 'userInfo', 'articles'];

export default HomeController;