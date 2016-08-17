'use strict';

import './login.less';

import LoginController from './LoginController';


let login = 'hoyeeApp.auth.login';

angular.module( login, [])
    .controller('hoyeeApp.loginController', LoginController);

export default login;