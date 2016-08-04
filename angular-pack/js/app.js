/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import config from './routes.js';
import controllersModule from './controllers/app.controllers';
import serverClientApi from './urls';


let hoyeeApp = 'hoyeeApp';

var app = angular
                .module( hoyeeApp, [angularUiRouter, controllersModule] )
                .config( config )
                .constant( 'urls', serverClientApi);

export default hoyeeApp;
