/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import './my-articles.less';
import MyArticlesController from './myarticles.controller';

var myArticlesPage = 'hoyee.pages.myarticles';

angular.module( myArticlesPage, [])
    .controller('hoyeeApp.myArticlesController', MyArticlesController);

export default myArticlesPage;