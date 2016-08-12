/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';

function WelcomeController($state){
    let vm = this;
    let user = JSON.parse( localStorage.getItem("user-info") );
    if ( user )
        $state.go('main.private.home');
}

WelcomeController.$inject = ['$state'];
export default WelcomeController;