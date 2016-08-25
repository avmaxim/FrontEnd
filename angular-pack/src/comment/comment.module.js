/**
 * Created by andrei on 8/23/2016.
 */

'use strict';

import commentCard from './commentCard/commentCard.module';
import genericComment from './genericComment/genericComment.module';

import CommentService from './comment.service';
 
let comment = 'hoyeeApp.comment';

angular.module( comment, [commentCard, genericComment])
    .service('CommentService', CommentService);

export default comment;