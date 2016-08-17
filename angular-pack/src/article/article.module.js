/**
 * Created by andrei.maksimchanka on 8/17/2016.
 */
'use strict';

import ArticleService from './ArticleService';

let article = 'hoyeeApp.article';

angular.module( article, [])
        .factory('ArticleService', ArticleService);

export default article;