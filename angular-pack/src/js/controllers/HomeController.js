/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function HomeController($state){
    let vm = this;
    let user = JSON.parse( localStorage.getItem("user-info") );
    if ( !user ) {
        $state.go('main.public.welcome');
    }
    vm.userInfo = user;
}

HomeController.$inject = ['$state'];

export default HomeController;