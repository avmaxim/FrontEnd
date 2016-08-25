/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

export default class UserService{

    /*@ngInject*/
    constructor($http, urls, AuthService){
        this.$http = $http;
        this.urls = urls;
        this.AuthService = AuthService;
    }

    getCurrentUserDetails(){
        return this.AuthService.getUserInfo().currentUser;
    }
    
    getUserById(userId){
        return this.$http
            .get( this.urls.USER_GET_BY_ID.replace(/\{.*?\}/, userId) )
            .then( (response) => response.data);
    }
}