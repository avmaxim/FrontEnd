/**
 * Created by andrei.maksimchanka on 8/10/2016.
 */

'use strict';

let GenericCommentComponent = {
    templateUrl: '/comment/genericComment/generic-comment.html',
    controller: 'genericCommentController',
    bindings: {
        article: '=forArticle'
    }
};

export default GenericCommentComponent;