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
        return $http
            .post(urls.ACCOUNT_LOGIN, credentials)
            .then((response) => {
                saveToken(response.data);
                return $http
                    .get(urls.USER_GET_CURRENT)
                    .then( (response) => {
                        saveUserSession(response.data);
                        return response.data;
                    });
            })
            .catch( (error) =>  console.error( error ) );
    }

    function register(username, password, email){
        const registerData = {
            "username": username,
            "password": password,
            "email": email
        };
        return $http
            .post(urls.ACCOUNT_REGISTER, registerData)
            .catch( (error) =>  console.error( error ) );
    }

    function signOut(){
        return $q( (resolve) => {
            $timeout(()=> {
                localStorage.clear();
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