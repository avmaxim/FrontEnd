/**
 * Created by andrei.maksimchanka on 8/16/2016.
 */


'use strict';

import './upsert.less';

import UpsertArticleController from './upsertArticle.controller';

var upsertPage = 'hoyee.pages.upsert';

angular.module( upsertPage, [])
    .controller('hoyeeApp.upsertArticleController', UpsertArticleController);

export default upsertPage;