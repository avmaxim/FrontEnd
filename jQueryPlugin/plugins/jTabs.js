/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $.fn.tabs = function(options){

        var defaults = {
           urlEncoded: false
        };

        var settings = $.extend(defaults, options);

        var tabs = this.filter("a");
        placeElemsIntoLine(tabs);


        return this;
    };


})(  jQuery );
