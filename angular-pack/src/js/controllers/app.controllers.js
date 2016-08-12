/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import WelcomeController from './WelcomeController';
import HomeController from './HomeController';
import RegisterController from './RegisterController';
import LoginController from './LoginController';
import SignoutController from './SignoutController';

var controllersModule = 'hoyeeApp.controllers';

angular.module(controllersModule, [])
    .controller('hoyeeApp.homeController', HomeController)
    .controller('hoyeeApp.welcomeController', WelcomeController)
    .controller('hoyeeApp.registerController', RegisterController)
    .controller('hoyeeApp.loginController', LoginController)
    .controller('hoyeeApp.signoutController', SignoutController);

export default controllersModule;