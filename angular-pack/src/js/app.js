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
import servicesModule from './services/app.services';
import serverClientApi from './urls';
import profile from './profile/profile.module';

let hoyeeApp = 'hoyeeApp';

var app = angular
                .module( hoyeeApp, [
                            profile,
                            angularUiRouter,
                            angularUiBootstrap,
                            controllersModule,
                            componentsModule,
                            servicesModule
                ])
                .config( config )
                .constant( 'urls', serverClientApi);

export default hoyeeApp;
