'use strict';

import './login.less';

import LoginController from './LoginController';
import SignoutController from './SignoutController';

let login = 'hoyeeApp.auth.login';

angular.module( login, [])
    .controller('hoyeeApp.loginController', LoginController)
    .controller('hoyeeApp.signoutController', SignoutController);

export default login;