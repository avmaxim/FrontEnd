
'use strict';

export default class CommentService {

    /*@ngInject*/
    constructor($http, urls) {
        this.$http = $http;
        this.urls = urls;
    }

    saveComment(comment){
        //stub for now
        console.log('Your comment is successfully added');
        console.dir(comment);
    }
}