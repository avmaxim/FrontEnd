'use strict';

run.$inject = ['$rootScope', '$state', 'AuthService'];

function run ($rootScope, $state, AuthService){

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {

        if ( toState.data.requiresAuthorization && !AuthService.getUserInfo()){
            event.preventDefault();
            $state.go('main.public.welcome');
        }

    });

}

export default run;