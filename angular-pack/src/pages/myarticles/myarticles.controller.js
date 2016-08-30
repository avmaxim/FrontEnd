/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict'; 

export default class MyArticlesController{
    constructor (myArticles, SearchService){
        this.myArticles = myArticles;
        this.searhResult = '';

        this.SearchService = SearchService;
        this.SearchService.attachObserver( this );
    }

    /* 'update' method is being invoked by SearchService once it gets updated */
    update(){
        this.searhResult = this.SearchService.getQuery();
    }
}

MyArticlesController.$inject = ['myArticles', 'SearchService'];