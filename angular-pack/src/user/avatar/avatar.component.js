
'use strict';

let AvatarComponent = {
    controller: 'avatarController',
    templateUrl: '/user/avatar/avatar.html',
    bindings: {
        src: '<',
        sizeStyle: '@size',
        shape: "@"
    }
};


export default AvatarComponent;