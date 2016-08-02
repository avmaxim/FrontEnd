/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

(function(){ 'use strict';

    angular.module('hoyeeeApp', ['custom', 'libs']);

    angular.module('custom', ['controllers']);
    angular.module('libs', ['ui.router']);

    angular.module('controllers', [
        'mainControllerModule',
        'homeControllerModule',
        'registerControllerModule',
        'loginControllerModule'
    ]);
})();