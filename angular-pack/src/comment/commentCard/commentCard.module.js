
'use strict';

import './comment-card.less';
import CommentCardController from './commentCard.controller';
import CommentCardComponent from './commentCard.component';

let commentCard = 'hoyeeApp.comment.commentCard';

angular.module( commentCard, [])
    .controller('commentCardController', CommentCardController)
    .component('commentCard', CommentCardComponent);

export default commentCard;