/**
 * Created by andrei.maksimchanka on 8/10/2016.
 */

'use strict';

function CommentCardDirective(){
    return {
        restrict: 'E',
        templateUrl: '/comment/commentCard/comment-card.html',
        controller: 'commentCardController',
        controllerAs: 'ctrl',
        scope: true,
        bindToController: {
            comment: '='
        }
    };
}

export default CommentCardDirective;