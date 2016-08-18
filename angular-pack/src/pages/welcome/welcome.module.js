/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import './welcome.less';
import WelcomeController from './welcome.controller';

var welcomePage = 'hoyee.pages.welcome';

angular.module( welcomePage, [])
    .controller('hoyeeApp.welcomeController', WelcomeController);

export default welcomePage;