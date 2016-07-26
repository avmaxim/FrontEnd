/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $(document).ready(function(){
        $( ".tabs" ).jtabs({
            theme: "grass",
            closeable: true,
            urlRouting: false,
            dynamicTabs: [
                {
                    number: 2,
                    url: "http://localhost:8080/sample/tab1.html",
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
