/**
 * Created by andrei.maksimchanka on 8/16/2016.
 */

"use strict";

HttpHeadersInterceptor.$inject = ['$rootScope'];

function HttpHeadersInterceptor($rootScope){
    let service = {};
    service.request = request;
    service.responseError = responseError;
    return service;

    function request( config ){
        const token = localStorage.getItem('user-info');
        if ( token ) {
            config.headers['X-Auth-Token'] = 'Bearer ' + token;
        }
        return config;
    }

     function responseError( response ) {
        if ( response.status === 401 ) {
            $rootScope.$broadcast('Unauthorized');
        }
        return response;
    }

}

export default HttpHeadersInterceptor;