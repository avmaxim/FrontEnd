/**
 * Created by andrei.maksimchanka on 8/18/2016.
 */
'use strict';

let ArticlePreviewComponent = {
    templateUrl: '/article/articlePreview/article-preview.html',
    controller: 'articlePreviewController',
    bindings: {
        article: '=datasource'
    }
};

export default ArticlePreviewComponent;
