/**
 * Created by andrei.maksimchanka on 8/10/2016.
 */

'use strict';

function GenericCommentDirective(){
    return {
        restrict: 'E',
        templateUrl: '/comment/genericComment/generic-comment.html',
        controller: 'genericCommentController',
        controllerAs: 'ctrl',
        scope: true
    };
}

export default GenericCommentDirective;