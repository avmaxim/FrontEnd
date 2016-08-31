'use strict';

import RemoveArticleModalComponent from './removeArticle.component';

let removeArticle = 'hoyeeApp.modals.removeArticle';

angular.module( removeArticle, [])
        .component('removeArticleModalComponent', RemoveArticleModalComponent);

export default removeArticle;