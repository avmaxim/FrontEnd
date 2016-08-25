/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */
 
'use strict';

import UserService from './user.service';
import avatar from './avatar/avatar.module';

let user = 'hoyeeApp.user';

angular.module( user, [ avatar ])
        .service('UserService', UserService);
export default user;