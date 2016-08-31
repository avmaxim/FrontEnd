/**
 * Created by andrei.maksimchanka on 8/31/2016.
 */

'use strict';

let RemoveArticleModalComponent = {
    templateUrl: '/common/modals/removeArticle/remove-article-modal.html' ,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function(){
        this.ok = () => {
            this.close();
        };

        this.cancel = () => {
            this.dismiss();
        };
    }
};

export default RemoveArticleModalComponent;