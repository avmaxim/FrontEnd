
'use strict';


ArticleService.$inject = ['$http', '$q', 'urls'];

function ArticleService($http, $q, urls){
    let service = {};
    service.getArticleById = getArticleById;
    service.upsertArticle = upsertArticle;
    service.getAllArticles = getAllArticles;
    service.getPersonalArticles = getPersonalArticles;
    return service;

    function getArticleById(articleId){
        return $http
            .get(urls.ARTICLE_GET_BY_ID.replace(/\{.*?\}/, articleId ))
            .then((response) => {
                let responseData = response.data;
                if (responseData.success) {
                    return responseData.data;
                } else {
                    return $q.reject(responseData);
                }
            });
    }

    function upsertArticle(article){
        let upsertUrl = (!article.articleId) ? urls.ARTICLE_CREATE : urls.ARTICLE_UPDATE.replace(/\{.*?\}/, article.articleId );
        return $http
            .post(upsertUrl, article)
            .then((response) => {
                let responseData = response.data;
                if (responseData.success) {
                    return responseData.data;
                } else {
                    return $q.reject(responseData);
                }
            });
    }

    function getAllArticles(){
        return $http
            .get( urls.ARTICLES_GET_ALL )
            .then( (response) => {
                let responseData = response.data;
                if ( responseData.success ){
                    return JSON.parse(responseData.data.articles);
                } else {
                    return $q.reject(responseData);
                }
            });
    }

    function getPersonalArticles(){
        return $http
            .get( urls.ARTICLES_GET_PERSONAL )
            .then( (response) => {
                let responseData = response.data;
                if ( responseData.success ){
                    return JSON.parse(responseData.data.articles);
                } else {
                    return $q.reject(responseData);
                }
            });
    }
}

export default ArticleService;