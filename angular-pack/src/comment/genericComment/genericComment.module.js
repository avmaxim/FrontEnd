/**
 * Created by andrei.maksimchanka on 8/24/2016.
 */

'use strict';

import './generic-comment.less';
import GenericCommentController from './genericComment.controller';
import GenericCommentDirective from './genericComment.directive';

let genericComment = 'hoyeeApp.comment.genericComment';

angular.module( genericComment, [])
    .controller('genericCommentController', GenericCommentController)
    .directive('genericComment', GenericCommentDirective);

export default genericComment;