
'use strict';


ArticleService.$inject = ['$http', 'urls'];

function ArticleService($http, urls){
    let service = {};
    service.getArticleById = getArticleById;
    service.upsertArticle = upsertArticle;
    service.getAllArticles = getAllArticles;
    service.removeArticle = removeArticle;
    service.getPersonalArticles = getPersonalArticles;
    return service;

    function getArticleById(articleId, userId) {
        const occurrences = { '{articleId}' : articleId, '{userId}' :  userId  };
        return $http
            .get(urls.ARTICLE_GET_BY_ID.replace(/\{.*?\}/g, (match) =>  occurrences[match] ? occurrences[match] : -1 ))
            .then( (article) => (article.data.date = new Date( article.data.timestamp ).toDateString(), article.data) )
            .catch( (error) =>  console.error( error ) );
    }

    function removeArticle( article ){
        return $http 
            .delete( urls.ARTICLE_DELETE.replace(/\{.*?\}/g, article.articleId) )
            .then( (response) => response.data )
            .catch( (error) =>  console.error( error ) );
    }
    
    function upsertArticle(article){
        let upsertUrl = !article.articleId ? urls.ARTICLE_CREATE : urls.ARTICLE_UPDATE.replace(/\{.*?\}/, article.articleId );
        return $http
            .post(upsertUrl, article)
            .then((response) => response.data )
            .catch( (error) =>  console.error( error ) );
    }

    function getAllArticles(){
        return $http
            .get( urls.ARTICLES_GET_ALL )
            .then( (response) => response.data.map(
                article => (article.date = new Date(article.timestamp).toDateString(), article)
            ))
            .catch( (error) =>  console.error( error ) );
    }

    function getPersonalArticles(){
        return $http
            .get( urls.ARTICLES_GET_PERSONAL )
            .then( (response) => response.data.map(
                article => (article.date = new Date(article.timestamp).toDateString(), article)
            ))
            .catch( (error) =>  console.error( error ) );
    }
}

export default ArticleService;