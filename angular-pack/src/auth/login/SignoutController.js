/**
 * Created by andrei.maksimchanka on 8/12/2016.
 */


'use strict';

function SignoutController($state){
    localStorage.removeItem( 'user-info' );
    $state.go('main.public.welcome');
}

SignoutController.$inject = ['$state'];

export default SignoutController;
