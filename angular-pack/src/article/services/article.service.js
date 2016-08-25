
'use strict';

export default class ArticleService{
    /*@ngInject*/
    constructor($http, urls) {
        this.$http = $http;
        this.urls = urls;
    }

    getArticleById(articleId, userId) {
        const occurrences = { '{articleId}' : articleId, '{userId}' :  userId  };
        return this.$http
                .get(this.urls.ARTICLE_GET_BY_ID.replace(/\{.*?\}/g, (match) =>  occurrences[match] ? occurrences[match] : -1 ))
                .then( (article) => (article.data.date = new Date( article.data.timestamp ).toDateString(), article.data) )
                .catch( (error) =>  console.error( error ) );
    }

    removeArticle( article ){
        return this.$http
            .delete( this.urls.ARTICLE_DELETE.replace(/\{.*?\}/g, article.articleId) )
            .then( (response) => response.data )
            .catch( (error) =>  console.error( error ) );
    }
    
    upsertArticle(article){
        let upsertUrl = !article.articleId ? this.urls.ARTICLE_CREATE : this.urls.ARTICLE_UPDATE.replace(/\{.*?\}/, article.articleId );
        return this.$http
            .post(upsertUrl, article)
            .then((response) => response.data )
            .catch( (error) =>  console.error( error ) );
    }

    getAllArticles(){
        return this.$http
            .get( this.urls.ARTICLES_GET_ALL )
            .then( (response) => response.data.map(
                article => (article.date = new Date(article.timestamp).toDateString(), article)
            ))
            .catch( (error) =>  console.error( error ) );
    }
 
    getPersonalArticles(){
        return this.$http
            .get( this.urls.ARTICLES_GET_PERSONAL )
            .then( (response) => response.data.map(
                article => (article.date = new Date(article.timestamp).toDateString(), article)
            ))
            .catch( (error) =>  console.error( error ) );
    }
}