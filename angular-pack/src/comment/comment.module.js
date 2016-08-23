/**
 * Created by andrei on 8/23/2016.
 */

'use strict';

import './commentCard/comment-card.less';
import CommentCardController from './commentCard/commentCard.controller';
import CommentCardDirective from './commentCard/commentCard.directive';
import CommentService from './comment.service';


let comment = 'hoyeeApp.comment';

angular.module( comment, [])
    .controller('commentCardController', CommentCardController)
    .directive('commentCard', CommentCardDirective)
    .factory('CommentService', CommentService);
export default comment;