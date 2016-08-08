/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict'; 

function LoginController($http, $state, $cookies, urls){
    let vm = this;
    vm.user = { name: '', password: ''};
    vm.submit = submit;

    function submit (){
        const loginData = {
            "username": vm.user.name,
            "password": vm.user.password
        };
        $http
            .post(urls.ACCOUNT_LOGIN, loginData)
            .then((response) => {
                $cookies.put("user", response.data.data);
                $state.go('home');
            })
            .catch((error) =>{
                console.error("Error occured: " + error);
            })
    }
}

LoginController.$inject = ['$http', '$state', '$cookies', 'urls'];

export default LoginController;