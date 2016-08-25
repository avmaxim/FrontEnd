
'use strict';
 
export default class CommentService {

    constructor($http, urls) {
        this.$http = $http;
        this.urls = urls;
    }

    upsertComment(comment){
        return 0;
    }
}

CommentService.$inject = ['$http', 'urls'];