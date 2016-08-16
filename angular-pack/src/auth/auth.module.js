/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

import login from './login/login.module';
import registration from './registration/registration.module';
import AuthenticationService from './AuthenticationService';

let auth = 'hoyeeApp.auth';

angular.module( auth, [ login, registration ])
        .factory('AuthenticationService', AuthenticationService);

export default auth;