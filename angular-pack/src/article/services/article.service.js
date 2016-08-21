
'use strict';


ArticleService.$inject = ['$http', '$q', 'urls'];

function ArticleService($http, $q, urls){
    let service = {};
    service.getArticleById = getArticleById;
    service.upsertArticle = upsertArticle;
    service.getAllArticles = getAllArticles;
    service.removeArticle = removeArticle;
    service.getPersonalArticles = getPersonalArticles;
    return service;

    function getArticleById(articleId, userId){
        return $http
            .get(urls.ARTICLE_GET_BY_ID.replace(/\{.*?\}/g, function (match){
                var index = {
                    '{articleId}': articleId,
                    '{userId}': userId
                };
                return index[match] != undefined ? index[match] : -1;
            }))
            .then((response) => {
                let responseData = response.data;
                if (responseData.success) {
                    return responseData.data;
                } else {
                    return $q.reject(responseData);
                }
            });
    }

    function removeArticle(article){
        //return $http.delete()
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