/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

export default class ProfileController{

    /*@ngInject*/
    constructor($state, AuthService, UserService){
        this.$state = $state;
        this.AuthService = AuthService;
        this.UserService = UserService;
        this.user = this.UserService.getCurrentUserDetails()
    }

    signOut (){
        this.AuthService
            .signOut()
            .then( () => this.$state.go('main.public.welcome') );
    }

}