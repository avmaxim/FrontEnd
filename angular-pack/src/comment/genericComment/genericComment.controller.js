/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

export default class GenericCommentController{

    /*@ngInject*/
    constructor(UserService, CommentService){
        this.author = UserService.getCurrentUserDetails();
        this.CommentService = CommentService;
        this.comment = {
            userId: this.author.userId,
            articleId: this.article.articleId,
            date: new Date().toDateString()
        }
    }

    submit(){
        this.comment.timestamp = new Date().getTime();
        this.CommentService.saveComment( this.comment );
    }
}
