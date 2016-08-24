/**
 * Created by andrei.maksimchanka on 8/16/2016.
 */

"use strict";

function HttpHeadersInterceptor(){
    return {
        request: function ( config ){
            const token = localStorage.getItem('token');
            return (token && (config.headers['X-Auth-Token'] = 'Bearer ' + token), config);
        }
    }
}

export default HttpHeadersInterceptor;