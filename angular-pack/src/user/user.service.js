/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';


UserService.$inject = ['$http', 'urls', 'AuthService'];

function UserService($http, urls, AuthService){
    let service = {};
    service.getCurrentUserDetails = getCurrentUserDetails;
    service.getUserById = getUserById;
    return service;

    function getCurrentUserDetails(){
        return AuthService.getUserInfo().currentUser;
    }
    
    function getUserById(userId){
        return $http
            .get( urls.USER_GET_BY_ID.replace(/\{.*?\}/, userId) )
            .then( (response) => response.data)
            .catch( (error) =>  console.error( error ) );
    }

}

export default UserService;