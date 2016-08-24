/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import HttpHeadersInterceptor from './httpHeaders.interceptor';
import HttpServerErrorsInterceptor from './httpServerErrors.interceptor';

var interceptorsModule = 'hoyeeApp.interceptors';

angular.module(interceptorsModule, [])
        .factory('HttpHeadersInterceptor', HttpHeadersInterceptor)
        .factory('HttpServerErrorsInterceptor', HttpServerErrorsInterceptor);

export default interceptorsModule;