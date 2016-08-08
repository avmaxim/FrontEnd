/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';

function RegisterController($http, $state, $cookies, urls){
    let vm = this;
    vm.user = { name: '', password: ''};
    vm.submit = submit;

    function submit (){
        const registerData = {
            "username": vm.user.name,
            "password": vm.user.password,
            "email": vm.user.email
        };
        $http
            .post(urls.ACCOUNT_REGISTER, registerData)
            .then((response) => {
                alert("Successfully registered!");
                $state.go('login');
            })
            .catch((error) => {
                console.error("Error occured: " + error);
            })
    }
}

RegisterController.$inject = ['$http', '$state', '$cookies', 'urls'];

export default RegisterController;
