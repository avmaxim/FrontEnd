/**
 * Created by andrei.maksimchanka on 8/4/2016.
 */

'use strict';

const SERVER_HOST = 'localhost:9090/Hoyee',
    HOYEE_HOST_URL = window.location.protocol + '//' + SERVER_HOST,
    SERVER_CLIENT_API = {
        ACCOUNT_LOGIN: HOYEE_HOST_URL + '/account/login',
        ACCOUNT_REGISTER: HOYEE_HOST_URL + '/account/register',
        ARTICLES_GET_ALL: HOYEE_HOST_URL + "/article/getAll"
    };

export default SERVER_CLIENT_API;
