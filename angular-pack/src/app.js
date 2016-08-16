/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

import "./common/styles/less/base-reset.less";
import "../node_modules/bootstrap/less/bootstrap.less";
import "./common/styles/less/index.less";

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';


import servicesModule from './config/interceptors/app.interceptors';
import serverClientApi from './config/urls';
import config from './config/config';

import header from './header/header.module';
import profile from './profile/profile.module';
import auth from './auth/auth.module';
import pages from './pages/pages.modules';

let hoyeeApp = 'hoyeeApp';

var app = angular
                .module( hoyeeApp, [
                    header,
                    profile,
                    auth,
                    pages,
                    angularUiRouter,
                    angularUiBootstrap,
                    servicesModule
                ])
                .config( config )
                .constant( 'urls', serverClientApi);

export default hoyeeApp;
