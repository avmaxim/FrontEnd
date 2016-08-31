/**
 * Created by andrei.maksimchanka on 8/31/2016.
 */

'use strict';

let PostArticleModalComponent = {
    templateUrl: '/common/modals/postArticle/post-article-modal.html' ,
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

export default PostArticleModalComponent;