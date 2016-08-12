/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

AuthenticationService.$inject = ['$timeout', '$q'];

function AuthenticationService($timeout, $q){
    let service = {};

    service.login = login;
    service.signOut = signOut;
    service.register = register;

    return service;


    function login(username, password){
        return $q( (resolve) => {
            // emulate a request to Hoyee Server
            $timeout(()=> {
                resolve();
            }, 1000);
        });
    }

    function signOut(){
        return $q( (resolve) => {
            // emulate a request to Hoyee Server
            $timeout(()=> {
                localStorage.clear();
                console.log("signed out");
                resolve();
            }, 1000);
        });
    }

    function register(){
        return $q( (resolve) => {
            // emulate a request to Hoyee Server
            $timeout(()=> {
                resolve();
            }, 1000);
        });
    }
}

export default AuthenticationService;