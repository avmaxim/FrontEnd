/**
 * Created by andrei.maksimchanka on 8/19/2016.
 */

'use strict';

export default function SelectPostedFilter(){
    return function(items){
        return (items.length) ? items.filter(item => item.isPosted) : items;
    }
}