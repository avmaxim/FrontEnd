/**
 * Created by andrei on 8/19/2016.
 */

'use strict';

import './article-options.less';

import ArticleOptionsDirective from './articleOptions.directive';
import ArticleOptionsController from './articleOptions.controller';

let articleOptions = 'hoyeeApp.article.articleOptions';

angular.module( articleOptions, [])
    .directive('articleOptions', ArticleOptionsDirective)
    .controller('articleOptionsController', ArticleOptionsController);

export default articleOptions;