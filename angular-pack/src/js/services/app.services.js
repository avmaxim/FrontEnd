/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import AuthenticationService from './AuthenticationService';

var servicesModule = 'hoyeeApp.services';

angular.module(servicesModule, [])
        .factory('AuthenticationService', AuthenticationService);

export default servicesModule;