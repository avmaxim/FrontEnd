
'use strict';
 
export default class CommentService {
    /*@ngInject*/
    constructor($http, urls) {
        this.$http = $http;
        this.urls = urls;
    }

    upsertComment(comment){
        return 0;
    }
}