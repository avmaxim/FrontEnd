/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

import login from './login/login.module';
import registration from './registration/registration.module';
import AuthService from './auth.service';

let auth = 'hoyeeApp.auth';

angular.module( auth, [ login, registration ])
        .provider('AuthService', AuthService);
export default auth;