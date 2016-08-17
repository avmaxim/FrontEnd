/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

function ProfileController($state, AuthenticationService){
    let vm = this;
    vm.userInfo = '';
    vm.signOut = signOut;

    function signOut(){
        AuthenticationService
            .signOut()
            .then( () => $state.go('main.public.welcome') )
            .catch( error => alert(response.message) );
    }

}

ProfileController.$inject = ['$state', 'AuthenticationService'] ;

export default ProfileController;