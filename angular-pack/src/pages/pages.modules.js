/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import homePage from './home/home.module';
import welcomePage from './welcome/welcome.module';

var pages = 'hoyee.pages';

angular.module( pages, [
    homePage,
    welcomePage
]);

export default pages;