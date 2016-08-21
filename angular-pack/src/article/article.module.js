/**
 * Created by andrei.maksimchanka on 8/17/2016.
 */
'use strict';

import ArticleService from './services/article.service';
import SelectPostedFilter from './filters/selectPosted/selectPosted.filter';

import articleOptions from './directives/articleOptions/articleOptions.module';
import articleCard from './directives/articleCard/articleCard.module';

let article = 'hoyeeApp.article';

angular.module( article, [ articleOptions, articleCard ])
        .factory('ArticleService', ArticleService)
        .filter('selectPosted', SelectPostedFilter);

export default article;