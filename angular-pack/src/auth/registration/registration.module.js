'use strict';

import './register.less';

import RegisterController from './RegisterController';

let register = 'hoyeeApp.auth.register';

angular.module( register, [])
    .controller('hoyeeApp.registerController', RegisterController);

export default register;