/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */
'use strict';

function WelcomeController($state, userInfo){
    let vm = this;
    if ( userInfo )
        $state.go('main.private.home');
}

WelcomeController.$inject = ['$state', 'userInfo'];
export default WelcomeController;