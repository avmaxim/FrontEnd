/**
 * Created by andrei.maksimchanka on 8/16/2016.
 */


'use strict';

import './upsert.less';

import UpsertArticleController from './UpsertArticleController';

var upsertPages = 'hoyee.pages.upsert';

angular.module( upsertPages, [])
    .controller('hoyeeApp.upsertArticleController', UpsertArticleController);

export default upsertPages;