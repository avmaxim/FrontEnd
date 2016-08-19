/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';


UserService.$inject = ['AuthService'];

function UserService(AuthService){
    let service = {};
    service.getCurrentUserDetails = getCurrentUserDetails;
    return service;

    function getCurrentUserDetails(){
        return AuthService.getUserInfo().currentUser;
    }

}

export default UserService;