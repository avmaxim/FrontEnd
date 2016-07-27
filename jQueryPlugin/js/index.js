/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    function promise(callback) {
        return new Promise( (resolve) => {
            callback(resolve);
        });
    }

    $(document).ready(function(){
        $( ".tabs" ).jtabs({
            closeable: true,
            urlRouting: true,
            dynamicTabs: [
            {
                number: 2,
                url: "http://localhost:8080/storage/tabABC.html",
                success : function(data){
                    console.dir(data);
                },
                error: function(error){
                    console.dir(error);
                }
            },
            {
                number: 4,
                loadAsPromise:  function(){
                    return promise(function(resolve) {
                        // assume it comprises a multitude of lines of code that runs 5sec long.
                        setTimeout(() => {
                            resolve( "Four. Rickey da Happy. Yey =) " );
                        }, 5000);
                    });
                }
            },
            {
                number: 5,
                load: function( callback ){
                    // assume it comprises a multitude of lines of code that runs 5sec long.
                    setTimeout(() => {
                        callback( "Five. Rickey da Happy. Yey =) " );
                    }, 5000);
                }
            }
        ]
        });
    });

})(jQuery);
