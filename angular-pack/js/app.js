/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

let hoyeeApp = 'hoyeeApp';

import config from './routes.js';
import controllersModule from './controllers/app.controllers';

var app = angular.module(hoyeeApp, ['ui.router', controllersModule]).config(config);

export default hoyeeApp;
