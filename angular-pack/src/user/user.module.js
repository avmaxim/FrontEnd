/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */
 
'use strict';

import UserService from './user.service';

let user = 'hoyeeApp.user';

angular.module( user, [ ])
        .service('UserService', new UserService);
export default user;