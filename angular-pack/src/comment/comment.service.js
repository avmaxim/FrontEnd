
'use strict';

export default class CommentService {

    /*@ngInject*/
    constructor($http, urls) {
        this.$http = $http;
        this.urls = urls;
    }

    saveComment(comment){
        return this.$http
                    .post( this.urls.COMMENT_CREATE, comment )
                    .then( (comment) => comment.data )
                    .catch( (error) =>  console.error( error ) );
    }
}