/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $(document).ready(function(){
        $( ".tabs" ).jtabs({
            closeable: true,
            urlRouting: true,
            dynamicTabs: [
            {
                number: 2,
                url: "http://localhost:8080/storage/tabABC.html"
            },
            {
                number: 4,
                url: "http://localhost:8080/storage/tab123.html",
                success : function(data){
                    console.dir(data);
                },
                error: function(error){
                    console.dir(error);
                }
            },
            {
                number: 5,
                url: function(){
                    setTimeout(function(){
                        $('#tab' + +tab.number).html("Rickey da Happy. Yey =)");
                    }, 5000);
                },
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
