/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class HomeController{
    constructor($state, userInfo, articles){
        userInfo || $state.go('main.public.welcome');
        this.$state = $state;
        this.userInfo = userInfo;
        this.articles = articles;
    }

}

HomeController.$inject = ['$state', 'userInfo', 'articles']; 