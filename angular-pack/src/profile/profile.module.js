/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

import './profile.less';
import ProfileController from './profile.controller';
import ProfileDirective from './profile.directive';


let profile = 'hoyeeApp.profile';

angular.module( profile, [])
    .controller('profileController', ProfileController)
    .directive('profile', ProfileDirective);


export default profile;