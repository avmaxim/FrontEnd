/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $(document).ready(function(){
        $( ".tabs" ).jtabs({
            theme: "material",
            closeable: true,
            urlRouting: true,
            dynamicTabs: [
                {
                    number: 2,
                    url: "http://localhost:8080/storage/tab2.html",
                    success : function(data){
                        console.dir(data);
                    },
                    error: function(error){
                        console.dir(error);
                    }
                }
            ]
        });
    });

})(jQuery);
