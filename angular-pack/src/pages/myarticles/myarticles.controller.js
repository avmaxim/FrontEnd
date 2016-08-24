/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function MyArticlesController( myArticles ){
    let ctrl = this;
    ctrl.myArticles = myArticles;
}

MyArticlesController.$inject = ['myArticles'];

export default MyArticlesController;