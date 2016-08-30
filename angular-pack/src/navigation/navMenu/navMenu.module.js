/**
 * Created by andrei.maksimchanka on 8/30/2016.
 */

'use strict';

import './nav-menu.less';
import NavMenuComponent from './navMenu.component';

var navMenu = 'hoyee.navigation.navMenu';

angular.module( navMenu, [])
    .component('navMenu', NavMenuComponent);

export default navMenu;