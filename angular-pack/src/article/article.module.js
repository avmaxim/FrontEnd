/**
 * Created by andrei.maksimchanka on 8/17/2016.
 */
'use strict';

import './article.less';

import ArticleService from './article.service';
import ArticleCardDirective from './articleCard.directive';
import ArticleCardController from './articleCard.controller';

let article = 'hoyeeApp.article';

angular.module( article, [])
        .factory('ArticleService', ArticleService)
        .directive('articleCard', ArticleCardDirective)
        .controller('articleCardController', ArticleCardController);

export default article;