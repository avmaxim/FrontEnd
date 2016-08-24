/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

import './profile.less';
import ProfileController from './profile.controller';
import ProfileComponent from './profile.component';


let profile = 'hoyeeApp.profile';

angular.module( profile, [])
    .controller('profileController', ProfileController)
    .component('profile', ProfileComponent);


export default profile;