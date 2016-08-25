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
        this.isLoginFailed = false;
    }
    
    submit (){
        this.AuthService
            .login( this.user.name, this.user.password )
            .then((response) => {
                alert('Successfully logged in.');
                this.$state.go('main.private.home');
            })
            .catch((error) => {
                this.isLoginFailed = true;
                if( error.status == 401 ){
                    this.loginFailedMsg = 'Incorrent username or password';
                }else {
                    this.loginFailedMsg = 'Sorry, that was a problem with a login service. Plz, try again later.';
                }
            })
    }
}
