
'use strict';


CommentService.$inject = ['$http', 'urls'];

function CommentService($http, urls){
    let service = {};
    service.upsertComment = upsertComment;

    function upsertComment(comment){
        
    }

    return service;

}

export default CommentService;