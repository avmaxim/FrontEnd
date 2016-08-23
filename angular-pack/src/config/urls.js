/**
 * Created by andrei.maksimchanka on 8/4/2016.
 */

'use strict';

const SERVER_HOST = 'localhost:8888',
    HOYEE_HOST_URL = window.location.protocol + '//' + SERVER_HOST,
    SERVER_CLIENT_API = {
        ACCOUNT_LOGIN: HOYEE_HOST_URL + '/account/login',
        ACCOUNT_REGISTER: HOYEE_HOST_URL + '/account/register',
        ARTICLES_GET_ALL: HOYEE_HOST_URL + '/articles/getAll',
        ARTICLES_GET_PERSONAL: HOYEE_HOST_URL + '/articles/getPersonal',
        ARTICLE_GET_BY_ID: HOYEE_HOST_URL + '/articles/getById/{articleId}/{userId}',
        ARTICLE_UPDATE: HOYEE_HOST_URL + '/articles/update/{articleId}',
        ARTICLE_CREATE: HOYEE_HOST_URL + '/articles/create',
        ARTICLE_DELETE: HOYEE_HOST_URL + '/articles/delete/{articleId}',
        USER_GET_CURRENT: HOYEE_HOST_URL + '/users/getCurrent',
        USER_GET_BY_ID: HOYEE_HOST_URL + '/users/getById/{userId}'
    };

export default SERVER_CLIENT_API;
