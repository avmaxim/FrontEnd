/**
 * Created by andrei on 8/19/2016.
 */

'use strict';

import './article-card.less';

import ArticleCardComponent from './articleCard.component';
import ArticleCardController from './articleCard.controller';   

let articleCard = 'hoyeeApp.article.articleCard';

angular.module( articleCard, [])
    .component('articleCard', ArticleCardComponent)
    .controller('articleCardController', ArticleCardController);

export default articleCard;