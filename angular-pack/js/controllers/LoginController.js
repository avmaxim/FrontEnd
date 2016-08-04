/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

'use strict';

function LoginController($http, $state, urls){
    let vm = this;
    vm.user = { name: '', password: ''};
    vm.articles = [];
    vm.submit = submit;

    var submit = function(){
        $http.get(urls.ARTICLES_GET_ALL)
            .then((response)=> {
                vm.articles = response.data.data;
                $state.go('home')
            }, (error) => {
                console.log(error);
            })
    }
}

LoginController.$inject = ['$http', '$state', 'urls'];

export default LoginController;