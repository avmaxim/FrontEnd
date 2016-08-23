/**
 * Created by andrei on 8/19/2016.
 */

'use strict';

import './article-card.less';

import ArticleCardDirective from './articleCard.directive';
import ArticleCardController from './articleCard.controller'; 

let articleCard = 'hoyeeApp.article.articleCard';

angular.module( articleCard, [])
    .directive('articleCard', ArticleCardDirective)
    .controller('articleCardController', ArticleCardController);

export default articleCard;