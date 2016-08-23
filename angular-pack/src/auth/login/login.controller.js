/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

LoginController.$inject = ['$state', 'AuthService'];

function LoginController($state, AuthService){
    let ctrl = this;
    ctrl.user = { name: '', password: ''};
    ctrl.submit = submit;

    function submit (){
        AuthService
            .login( ctrl.user.name, ctrl.user.password )
            .then((response) => {
                alert('Successfully logged in.');
                $state.go('main.private.home');
            });
    }
}

export default LoginController;