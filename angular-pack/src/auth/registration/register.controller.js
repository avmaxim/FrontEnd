/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';

function RegisterController($http, $state, urls){
    let ctrl = this;
    ctrl.user = { name: '', password: ''};
    ctrl.submit = submit;

    function submit (){
        const registerData = {
            "username": ctrl.user.name,
            "password": ctrl.user.password,
            "email": ctrl.user.email
        };
        $http
            .post(urls.ACCOUNT_REGISTER, registerData)
            .then((response) => {
                $state.go('main.public.login');
                console.log("Successfully registered!");
            })
            .catch((error) => {
                console.error("Error occured: " + error);
            })
    }
}

RegisterController.$inject = ['$http', '$state', 'urls'];

export default RegisterController;
