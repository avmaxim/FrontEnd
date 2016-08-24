/**
 * Created by andrei.maksimchanka on 8/16/2016.
 */

"use strict";

HttpServerErrorsInterceptor.$inject = ['$q'];

function HttpServerErrorsInterceptor( $q ){
    return {
        responseError: (response) => $q.reject(response)
    }
}

export default HttpServerErrorsInterceptor;