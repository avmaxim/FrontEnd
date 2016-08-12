/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

import "../styles/less/base-reset.less";
import "../../node_modules/bootstrap/less/bootstrap.less";
import "../styles/less/index.less";

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';

import config from './routes.js';
import componentsModule from './components/app.components';
import controllersModule from './controllers/app.controllers';
import serverClientApi from './urls';

let hoyeeApp = 'hoyeeApp';

var app = angular
                .module( hoyeeApp, [angularUiRouter, angularUiBootstrap, controllersModule, componentsModule] )
                .config( config )
                .constant( 'urls', serverClientApi);

export default hoyeeApp;
