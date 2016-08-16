/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import homePage from './home/home.module';
import welcomePage from './welcome/welcome.module';
import upsertPages from './upsert/upsert.module';
import myarticlesPage from './myarticles/myarticles.module';

var pages = 'hoyee.pages';

angular.module( pages, [
    homePage,
    welcomePage,
    upsertPages,
    myarticlesPage
]);

export default pages;