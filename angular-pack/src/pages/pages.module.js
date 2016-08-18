/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import homePage from './home/home.module';
import welcomePage from './welcome/welcome.module';
import upsertPage from './upsert/upsert.module';
import myarticlesPage from './myarticles/myarticles.module';
import previewPage from './preview/preview.module';

var pages = 'hoyee.pages';

angular.module( pages, [
    homePage,
    welcomePage,
    upsertPage,
    myarticlesPage,
    previewPage
]);

export default pages;