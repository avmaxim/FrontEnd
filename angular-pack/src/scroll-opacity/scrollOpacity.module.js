/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */ 
  
'use strict';

import ScrollOpacity from './scrollOpacity.directive';

let scrollOpacity = 'hoyeeApp.scrollOpacity';

angular.module( scrollOpacity, [  ])
        .directive('scrollOpacity', ScrollOpacity);

export default scrollOpacity;