/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */ 
  
'use strict';

import ScrollOpacity from './scrollOpacity.directive';
import register from '../config/register.js';

let scrollOpacity = 'hoyeeApp.scrollOpacity';

angular.module( scrollOpacity, []);
register( scrollOpacity ).directive('scrollOpacity', ScrollOpacity);

export default scrollOpacity;