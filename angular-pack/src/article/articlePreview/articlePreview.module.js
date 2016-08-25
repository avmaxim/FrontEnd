/**
 * Created by andrei on 8/19/2016.
 */

'use strict';

import './article-preview.less';

import ArticlePreviewComponent from './articlePreview.component';
import ArticlePreviewController from './articlePreview.controller';

let articlePreview = 'hoyeeApp.article.articlePreview';

angular.module( articlePreview, [])
    .component('articlePreview', ArticlePreviewComponent)
    .controller('articlePreviewController', ArticlePreviewController);

export default articlePreview;