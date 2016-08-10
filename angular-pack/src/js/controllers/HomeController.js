/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function HomeController( $state, $cookies){
    let vm = this;
    let user = JSON.parse( $cookies.get("user-info") );
    if ( !user )
        $state.go('main');
    vm.userInfo = user;
}

HomeController.$inject = ['$state', '$cookies'];

export default HomeController;