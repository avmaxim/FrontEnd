/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */

'use strict';

function ProfileController($state, AuthService, UserService){
    let ctrl = this;
    ctrl.signOut = signOut;
    ctrl.userInfo = UserService.getCurrentUserDetails();

    function signOut(){
        AuthService
            .signOut()
            .then( () => $state.go('main.public.welcome') )
            .catch( error => alert(response.message) );
    }

}

ProfileController.$inject = ['$state', 'AuthService', 'UserService'] ;

export default ProfileController;