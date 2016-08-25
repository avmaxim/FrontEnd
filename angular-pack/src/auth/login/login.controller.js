/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class LoginController {

    /*@ngInject*/
    constructor($state, AuthService) {
        this.$state = $state;
        this.AuthService = AuthService;
        this.user = {name: '', password: ''};
        this.logicFailed = false;
    }
    
    submit (){
        this.AuthService
            .login( this.user.name, this.user.password )
            .then((response) => {
                alert('Successfully logged in.');
                this.$state.go('main.private.home');
            })
            .catch((error) => {
                if( error.status == 401 ){
                    this.loginFailed = true;
                }
            })
    }
}
