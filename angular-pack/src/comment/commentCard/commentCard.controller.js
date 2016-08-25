/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

export default class CommentCardController {

    /*@ngInject*/
    constructor(UserService) {
        //this.CommentService = CommentService;
        this.isCommentLiked = false;
        this.comment.date = new Date(this.comment.timestamp).toDateString();
        UserService
            .getUserById( this.comment.userId )
            .then((user)=> this.commentAuthor = user);
    }
}
