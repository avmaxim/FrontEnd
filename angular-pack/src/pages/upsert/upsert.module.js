/**
 * Created by andrei.maksimchanka on 8/16/2016.
 */


'use strict';

import './create-article.less';
import './edit-article.less';

import CreateArticleController from './CreateArticleController';
import EditArticleController from './EditArticleController';
import UpsertArticleController from './UpsertArticleController';

var upsertPages = 'hoyee.pages.upsert';

angular.module( upsertPages, [])
    .controller('hoyeeApp.createArticleController', CreateArticleController)
    .controller('hoyeeApp.editArticleController', EditArticleController)
    .controller('hoyeeApp.upsertArticleController', UpsertArticleController);

export default upsertPages;