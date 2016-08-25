/**
 * Created by andrei.maksimchanka on 8/17/2016.
 */
'use strict';

import ArticleService from './services/article.service';
import SelectPostedFilter from './filters/selectPosted/selectPosted.filter';

import articleOptions from './articleOptions/articleOptions.module';
import articleCard from './articleCard/articleCard.module';
import articlePreview from './articlePreview/articlePreview.module';

let article = 'hoyeeApp.article';

angular.module( article, [ articleOptions, articleCard, articlePreview ])
        .service('ArticleService', ArticleService)
        .filter('selectPosted', SelectPostedFilter);

export default article;