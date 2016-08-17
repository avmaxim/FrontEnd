/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function HomeController($state, userInfo){
    let vm = this;
    if ( !userInfo ) {
        $state.go('main.public.welcome');
    }
    //vm.userInfo = userInfo;
}

HomeController.$inject = ['$state', 'userInfo'];

export default HomeController;