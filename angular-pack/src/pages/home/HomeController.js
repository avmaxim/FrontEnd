/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function HomeController($state, userInfo, articles){
    userInfo || $state.go('main.public.welcome');

    let ctrl = this;
    for(let i = 0; i < articles.length; i++){
        articles[i].date = new Date(articles[i].timestamp).toDateString();
    }
    ctrl.articles = articles;
}

HomeController.$inject = ['$state', 'userInfo', 'articles'];

export default HomeController;