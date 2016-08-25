/**
 * Created by andrei.maksimchanka on 8/24/2016.
 */

'use strict';

import './generic-comment.less';
import GenericCommentController from './genericComment.controller';
import GenericCommentComponent from './genericComment.component';

let genericComment = 'hoyeeApp.comment.genericComment';

angular.module( genericComment, [])
    .controller('genericCommentController', GenericCommentController)
    .component('newComment', GenericCommentComponent);

export default genericComment;