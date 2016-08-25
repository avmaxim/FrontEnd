/**
 * Created by andrei.maksimchanka on 8/10/2016.
 */

'use strict';

let CommentCardComponent = {
    templateUrl: '/comment/commentCard/comment-card.html',
    controller: 'commentCardController',
    bindings: {
        comment: '=datasource'
    }
};

export default CommentCardComponent;