'use strict';

import PostArticleModalComponent from './postArticle.component';

let postArticle = 'hoyeeApp.modals.postArticle';

angular.module( postArticle, [])
        .component('postArticleModalComponent', PostArticleModalComponent);

export default postArticle;