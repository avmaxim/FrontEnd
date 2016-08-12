/**
 * Created by andrei.maksimchanka on 8/10/2016.
 */

'use strict';

function ProfileDirective(){
    return {
        restrict: 'E',
        templateUrl: '/js/profile/profile.html',
        controller: 'profileController',
        controllerAs: 'ctrl'
    };
}

export default ProfileDirective;