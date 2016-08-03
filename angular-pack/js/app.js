/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

let hoyeeApp = 'hoyeeApp';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import config from './routes.js';
import controllersModule from './controllers/app.controllers';

var app = angular.module(hoyeeApp, [angularUiRouter, controllersModule]).config(config);

export default hoyeeApp;
