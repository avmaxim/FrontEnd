/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function MyArticlesController( myArticles ){
    let vm = this;
    vm.myArticles = myArticles;
}

MyArticlesController.$inject = ['myArticles'];

export default MyArticlesController;