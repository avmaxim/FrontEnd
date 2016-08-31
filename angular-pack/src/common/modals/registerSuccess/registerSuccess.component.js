/**
 * Created by andrei.maksimchanka on 8/31/2016.
 */

'use strict';

let RegisterSuccessModalComponent = {
    templateUrl: '/common/modals/registerSuccess/register-success-modal.html' ,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function(){
        this.ok = () => {
            this.close();
        }
    }
};

export default RegisterSuccessModalComponent;