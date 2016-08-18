/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function MyArticlesController( myArticles ){
    let ctrl = this;
    for(let i = 0; i < myArticles.length; i++){
        myArticles[i].date = new Date(myArticles[i].timestamp).toDateString();
    }
    ctrl.myArticles = myArticles;
}

MyArticlesController.$inject = ['myArticles'];

export default MyArticlesController;