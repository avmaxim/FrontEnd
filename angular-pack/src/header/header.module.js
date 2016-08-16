/**
 * Created by andrei.maksimchanka on 8/3/2016.
 */

'use strict';

import './header.less';
import HeaderPublicComponent from './headerPublic/headerPublic.component';
import HeaderPrivateComponent from './headerPrivate/headerPrivate.component';

var header = 'hoyee.header';

angular.module( header, [])
    .component('headerPublic', HeaderPublicComponent)
    .component('headerPrivate', HeaderPrivateComponent);

export default header;