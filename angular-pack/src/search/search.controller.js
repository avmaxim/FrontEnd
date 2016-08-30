/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

export default class SearchController{

    /*@ngInject*/
    constructor(SearchService){
        this.SearchService = SearchService;
        this.searchQuery = '';
    }

    search() {
        this.SearchService.setQuery( this.searchQuery );
    }

}