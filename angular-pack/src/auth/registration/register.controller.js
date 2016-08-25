/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';



export default class RegisterController {

    constructor($state, AuthService){
        this.$state = $state;
        this.AuthService = AuthService;
        this.user = { name: '', password: ''};
    } 
     
    submit (){
        this.AuthService
            .register(this.user.name, this.user.password, this.user.register)
            .then( () => {
                this.$state.go('main.public.login');
                console.log("Successfully registered!");
            })
    }
}

 RegisterController.$inject = ['$state', 'AuthService'];
