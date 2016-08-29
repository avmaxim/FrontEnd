/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class HomeController{
    constructor($state, articles){
        this.$state = $state;
        this.articles = articles;
    }

}

HomeController.$inject = ['$state', 'articles'];