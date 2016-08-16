/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import AuthenticationService from './AuthenticationService';
import HttpHeadersInterceptor from './HttpHeadersInterceptor';

var servicesModule = 'hoyeeApp.services';

angular.module(servicesModule, [])
        .factory('AuthenticationService', AuthenticationService)
        .factory('HttpHeadersInterceptor', HttpHeadersInterceptor);

export default servicesModule;