/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function AuthService(){
    return {
        getUserInfo : getUserInfo,
        $get: ['$http', '$q', '$timeout', 'urls', AuthServiceImpl]
    };
}

function AuthServiceImpl($http, $q, $timeout, urls){
    let service = {};
    service.login = login;
    service.signOut = signOut;
    service.register = register;
    service.getUserInfo = getUserInfo;

    return service;

    function login(username, password){
        let credentials = {
            username: username,
            password: password
        };
        return $http.post(urls.ACCOUNT_LOGIN, credentials).then((response) => {
            let responseData = response.data;
            if (responseData.success) {
                saveToken(responseData.data['token']);
                return $http.get(urls.USER_GET_CURRENT).then( (response) => {
                    saveUserSession(JSON.parse(response.data.data.user));
                    return responseData.data;
                });
            } else {
                return $q.reject(responseData);
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

    function saveUserSession(user){
        localStorage.setItem('user-info', JSON.stringify({
            currentUser: user
        }));
    }

    function saveToken(token){
        localStorage.setItem('token', token);
    }
}

function getUserInfo(){
    return JSON.parse( localStorage.getItem("user-info") );
}

export default AuthService;