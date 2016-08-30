/**
 * Created by andrei.maksimchanka on 8/30/2016.
 */

'use strict';

import './nav-item.less';
import NavItemComponent from './navItem.component';

var navItem = 'hoyee.navigation.navItem';

angular.module( navItem, [])
    .component('navItem', NavItemComponent);

export default navItem;