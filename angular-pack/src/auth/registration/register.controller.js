/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';

RegisterController.$inject = ['$state', 'AuthService'];

function RegisterController($state, AuthService){
    let ctrl = this;
    ctrl.user = { name: '', password: ''};
    ctrl.submit = submit;

    function submit (){
        AuthService
            .register(ctrl.user.name, ctrl.user.password, ctrl.user.register)
            .then( () => {
                $state.go('main.public.login');
                console.log("Successfully registered!");
            })
    }
}

export default RegisterController;
