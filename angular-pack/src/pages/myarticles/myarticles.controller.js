/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict'; 

export default class MyArticlesController{
    constructor (myArticles){
        this.myArticles = myArticles;
    }
}
MyArticlesController.$inject = ['myArticles'];