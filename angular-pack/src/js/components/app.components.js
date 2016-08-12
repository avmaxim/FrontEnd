/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import headerPublicComponent from './headerPublic/headerPublic.component';
import headerPrivateComponent from './headerPrivate/headerPrivate.component';

var componentsModule = 'hoyee.components';

angular.module(componentsModule, [])
    .component('headerPublic', headerPublicComponent)
    .component('headerPrivate', headerPrivateComponent);

export default componentsModule;