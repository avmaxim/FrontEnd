'use strict';

import RegisterSuccessModalComponent from './registerSuccess.component';

let registerSuccess = 'hoyeeApp.modals.registerSuccess';

angular.module( registerSuccess, [])
        .component('registerSuccessModalComponent', RegisterSuccessModalComponent);

export default registerSuccess;