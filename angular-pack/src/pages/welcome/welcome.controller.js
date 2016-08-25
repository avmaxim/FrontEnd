/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';
 
export default class WelcomeController {
    constructor($state, userInfo){
        userInfo && $state.go('main.private.home');
    }
}

WelcomeController.$inject = ['$state', 'userInfo'];