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

import interceptors from './config/interceptors/app.interceptors';
import serverClientApi from './config/urls';

import config from './routes';
import run from './config/run.js';

import header from './header/header.module';
import profile from './profile/profile.module';
import auth from './auth/auth.module';
import pages from './pages/pages.module';
import article from './article/article.module';
import user from './user/user.module';
import comment from './comment/comment.module';
import scrollOpacity from './scroll-opacity/scrollOpacity.module';
import navigation from './navigation/navigation.module';

let hoyeeApp = 'hoyeeApp';

var app = angular
                .module( hoyeeApp, [
                    angularUiRouter,
                    angularUiBootstrap,
                    header,
                    profile,
                    auth,
                    pages,
                    article,
                    user,
                    comment,
                    scrollOpacity,
                    interceptors,
                    navigation
                ])
                .config( config )
                .constant( 'urls', serverClientApi)
                .run ( run );
export default hoyeeApp;
