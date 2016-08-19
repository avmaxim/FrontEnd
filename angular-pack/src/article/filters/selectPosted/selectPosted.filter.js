/**
 * Created by andrei.maksimchanka on 8/19/2016.
 */

'use strict';

function SelectPostedFilter(){
    return function(items){
        return items.filter(item => item.isPosted);
    }
}

export default SelectPostedFilter;