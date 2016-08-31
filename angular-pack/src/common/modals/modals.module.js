'use strict';

import registerSuccess from './registerSuccess/registerSuccess.module';
import removeArticle from './removeArticle/removeArticle.module';
import postArticle from './postArticle/postArticle.module';
import articleSaveSuccess from './articleSaveSuccess/articleSaveSuccess.module';

let modals = 'hoyeeApp.modals';

angular.module( modals, [
    registerSuccess,
    removeArticle,
    postArticle,
    articleSaveSuccess
]);

export default modals;