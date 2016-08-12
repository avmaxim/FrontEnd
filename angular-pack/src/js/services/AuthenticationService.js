/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

AuthenticationService.$inject = ['$q', '$timeout', '$httpProvider', 'urls'];

function AuthenticationService($q, $timeout, $httpProvider, urls){
    let service = {};

    service.login = login;
    service.signOut = signOut;
    service.register = register;

    return service;

    function login(username, password){
        let credentials = {
            username: username,
            password: password
        };
        return $http
                .post(urls.ACCOUNT_LOGIN, credentials)
                .then((response) => {
                    if (response.success) {
                        saveUserSession( username , response.data.token );
                        return response;
                    } else {
                        return $q.reject(response);
                    }
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

    function signOut(){
        return $q( (resolve) => {
            // simulate a request to Hoyee Server
            $timeout(()=> {
                localStorage.clear();
                console.log("signed out");
                resolve();
            }, 1000);
        });
    }

    function saveUserSession(username, token){
        localStorage.setItem('token', token);
        localStorage.setItem('user-info', {
            currentUser: {
                username: username,
                authData: token
            }
        });
        $httpProvider.defaults.headers.common['X-Auth-Token'] = 'Bearer ' + token;
    }
}

export default AuthenticationService;