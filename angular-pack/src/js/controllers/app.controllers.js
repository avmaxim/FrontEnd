/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

import MainController from './MainController';
import HomeController from './HomeController';
import RegisterController from './RegisterController';
import LoginController from './LoginController';

var controllersModule = 'hoyeeApp.controllers';

angular.module(controllersModule, [])
    .controller('hoyeeApp.homeController', HomeController)
    .controller('hoyeeApp.mainController', MainController)
    .controller('hoyeeApp.registerController', RegisterController)
    .controller('hoyeeApp.loginController', LoginController);

export default controllersModule;