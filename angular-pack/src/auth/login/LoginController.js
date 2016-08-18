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
            })
            .catch((error) => {
                if (error.status == 401) {
                    console.error("Error occured: " + error.message);
                    $state.go('main.public.register');
                }
            });
    }
}

export default LoginController;