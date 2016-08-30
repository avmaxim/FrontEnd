/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import navMenu from './navMenu/navMenu.module';
import navItem from './navItem/navItem.module';

let navigation = 'hoyee.navigation';

angular.module( navigation, [navMenu, navItem]);

export default navigation;