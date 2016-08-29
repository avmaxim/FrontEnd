/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

export default class GenericCommentController{

    /*@ngInject*/
    constructor($state, UserService, CommentService){
        this.author = UserService.getCurrentUserDetails();
        this.$state = $state;
        this.CommentService = CommentService;
        this.comment = {
            userId: this.author.userId,
            contents: '',
            articleId: this.article.articleId,
            articleOwnerId: this.article.userId,
            date: new Date().toDateString()
        }
    }

    submit(){
        this.comment.timestamp = new Date().getTime();
        this.CommentService
            .saveComment( this.comment )
            .then( ()=> {
                console.log('Your comment is successfully added');
                this.$state.reload();
            })
    }
}
