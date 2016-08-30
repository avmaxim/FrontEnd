/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class HomeController {
    constructor($state, articles, SearchService){
        this.$state = $state;
        this.articles = articles;
        this.searhResult = '';

        this.SearchService = SearchService;
        this.SearchService.attachObserver( this );
    }

    /* 'update' method is being invoked by SearchService once it gets updated */
    update(){
        this.searhResult = this.SearchService.getQuery();
    }
}

HomeController.$inject = ['$state', 'articles', 'SearchService'];