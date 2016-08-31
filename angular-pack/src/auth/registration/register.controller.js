/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';



export default class RegisterController {
    /*@ngInject*/
    constructor($state, $uibModal, AuthService){
        this.$state = $state;
        this.$uibModal = $uibModal;
        this.AuthService = AuthService;
        this.user = { name: '', password: ''};
        this.isRegistrationFailed = false;
    } 
     
    submit (){
        this.AuthService
            .register(this.user.name, this.user.password, this.user.register)
            .then( () => {
                this.$uibModal
                    .open({ component: 'registerSuccessModalComponent' })
                    .result.then( (ok) => {
                        this.$state.go('main.public.login');
                    })
            })
            .catch( (error) => {
                this.isRegistrationFailed = true;
                this.registerFailedMsg = 'Sorry, that was a problem with a registration service. Plz, try again later.'
            })
    }
}
