/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $(function(){
        $( ".tabs" ).jtabs({
            closeable: true,
            urlRouting: true,
            dynamicTabs: [
                {
                    number: 2,
                    url: "http://localhost:8080/storage/tab123.html"
                },
                {
                    number: 4,
                    load:  loadContentsViaPromise
                },
                {
                    number: 5,
                    load: loadContentsViaCallback
                }
            ]
        });
    });

    function loadContentsViaPromise(){
        return new Promise( ( resolve ) => {
            setTimeout(() => {
                resolve( "Four. Rickey da Happy. Yey =) " );                                                            // assume it comprises a multitude of lines of code that runs a very long time.
            }, Math.random() * 3000);
        });
    }

    function loadContentsViaCallback( callback ){
        setTimeout(() => {
            callback( "Five. Rickey da Happy. Yey =) " );                                                               // assume it comprises a multitude of lines of code that runs a very long time.
        }, Math.random() * 3000);
    }

})(jQuery);
