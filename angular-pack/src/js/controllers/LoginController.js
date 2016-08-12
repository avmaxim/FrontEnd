/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

LoginController.$inject = ['$state', 'AuthenticationService'];

function LoginController($state, AuthenticationService){
    let vm = this;
    vm.user = { name: '', password: ''};
    vm.submit = submit;

    function submit (){
        AuthenticationService
            .login( vm.user.name, vm.user.password )
            .then((response) => {
                    AuthenticationService.setCredentials(vm.user.name, vm.user.password);
            })
            .catch((error) => {
                console.error("Error occured: " + error.message);
            });
    }
}

export default LoginController;