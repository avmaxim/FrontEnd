
'use strict';

import './comment-card.less';
import CommentCardController from './commentCard.controller';
import CommentCardDirective from './commentCard.directive';

let commentCard = 'hoyeeApp.comment.commentCard';

angular.module( commentCard, [])
    .controller('commentCardController', CommentCardController)
    .directive('commentCard', CommentCardDirective);

export default commentCard;