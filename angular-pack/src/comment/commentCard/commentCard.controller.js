/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

CommentCardController.$inject = ['CommentService', 'UserService'] ;

function CommentCardController(CommentService, UserService){
    let ctrl = this;
    ctrl.toggleLike = toggleLike;
    ctrl.isCommentLiked = false;
    ctrl.comment.date = new Date( ctrl.comment.timestamp ).toDateString();
    UserService.getUserById( ctrl.comment.userId ).then( (user)=> ctrl.commentAuthor = user );

    function toggleLike(){
        (ctrl.isCommentLiked = !ctrl.isCommentLiked) ? ctrl.comment.likesCount++ : ctrl.comment.likesCount--;
        CommentService.upsertComment( ctrl.comment );
    }
}

export default CommentCardController;