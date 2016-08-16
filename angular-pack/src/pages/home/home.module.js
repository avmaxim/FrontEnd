/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import './home.less';
import HomeController from './HomeController';

var homePage = 'hoyee.pages.home';

angular.module( homePage, [])
    .controller('hoyeeApp.homeController', HomeController);

export default homePage;