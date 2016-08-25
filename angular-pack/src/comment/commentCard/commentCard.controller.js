/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

export default class CommentCardController {

    /*@ngInject*/
    constructor(UserService) {
        this.comment.date = new Date(this.comment.timestamp).toDateString();
        this.isInitialized = false;

        UserService
            .getUserById( this.comment.userId )
            .then((author) => {
                this.author = author;
                this.isInitialized = true;
            });
    }
}