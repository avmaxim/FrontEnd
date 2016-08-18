/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import './preview.less';
import PreviewArticleController from './preview.controller';

var previewPage = 'hoyee.pages.preview';

angular.module( previewPage, [])
    .controller('hoyeeApp.previewArticleController', PreviewArticleController);

export default previewPage;