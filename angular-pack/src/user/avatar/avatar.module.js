/**
 * Created by andrei.maksimchanka on 8/12/2016.
 *
 *
 */
 
'use strict';

import './avatar.less';

import AvatarComponent from './avatar.component';
import AvatarController from './avatar.controller';

let avatar = 'hoyeeApp.user.avatar';

angular.module( avatar, [ ])
        .component('avatar', AvatarComponent)
        .controller('avatarController', AvatarController);

export default avatar;