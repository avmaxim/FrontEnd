/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class AuthService{
    constructor(){

    }
    getUserInfo(){
        return JSON.parse( localStorage.getItem("user-info") );
    }

    /*ngInject*/
    $get(){
        return new AuthServiceImpl;
    }
}

class AuthServiceImpl{
    constructor($http, $q, $timeout, urls){
        this.$http = $http;
        this.$q = $q;
        this.$timeout = $timeout;
        this.urls = urls;
    }

    login (username, password) {
        let credentials = {
            username: username,
            password: password
        };
        return this.$http
            .post(this.urls.ACCOUNT_LOGIN, credentials)
            .then( response => this.saveToken(response.data) )
            .then( () => this.$http.get(this.urls.USER_GET_CURRENT))
            .then( response => (this.saveUserSession(response.data), response.data) );
    }

    register(username, password, email){
        const registerData = {
            "username": username,
            "password": password,
            "email": email
        };
        return this.$http
            .post(this.urls.ACCOUNT_REGISTER, registerData)
            .catch( error =>  console.error( error ) );
    }

    signOut(){
        return this.$q( (resolve) => {
            this.$timeout(()=> {
                localStorage.clear();
                resolve();
            }, 1000);
        });
    }

    saveUserSession(user){
        localStorage.setItem('user-info', JSON.stringify({
            currentUser: user
        }));
    }

    saveToken(token){
        localStorage.setItem('token', token);
    }
}

AuthServiceImpl.$inject = ['$http', '$q', '$timeout', 'urls'];