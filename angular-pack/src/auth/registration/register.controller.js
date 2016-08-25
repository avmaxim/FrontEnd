/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';



export default class RegisterController {
    /*@ngInject*/
    constructor($state, AuthService){
        this.$state = $state;
        this.AuthService = AuthService;
        this.user = { name: '', password: ''};
        this.isRegistrationFailed = false;
    } 
     
    submit (){
        this.AuthService
            .register(this.user.name, this.user.password, this.user.register)
            .then( () => {
                this.$state.go('main.public.login');
                alert("Congratulations! U've been successfully registered!");
            })
            .catch( (error) => {
                this.isRegistrationFailed = true;
                this.registerFailedMsg = 'Sorry, that was a problem with a registration service. Plz, try again later.'
            })
    }
}
