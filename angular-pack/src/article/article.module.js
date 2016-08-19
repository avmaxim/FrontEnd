/**
 * Created by andrei.maksimchanka on 8/17/2016.
 */
'use strict';

import './directives/articleCard/article.less';

import ArticleService from './services/article.service';
import ArticleCardDirective from './directives/articleCard/articleCard.directive';
import ArticleCardController from './directives/articleCard/articleCard.controller';
import SelectPostedFilter from './filters/selectPosted/selectPosted.filter';

let article = 'hoyeeApp.article';

angular.module( article, [])
        .factory('ArticleService', ArticleService)
        .directive('articleCard', ArticleCardDirective)
        .controller('articleCardController', ArticleCardController)
        .filter('selectPosted', SelectPostedFilter);

export default article;