/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $.fn.jtabs = function(options){

        var defaults = {
                theme: 'grass',
                urlRouting: false,
                closeable: false,
                dynamicTabs: []
            },
            settings = $.extend(defaults, options),
            $widget = $(this).addClass('jtabs-widget'),                                                                 // div.jtabs-widget
            $tabControl = $widget.children('ul').eq(0).addClass('jtabs-nav'),                                           // ul.jtabs-nav
            $tabs = $tabControl.children('li').addClass('jtab'),                                                        // [li.jtab, ...]
            $activeTab,                                                                                                 // li.jtab.active
            $activeContent;                                                                                             // div#tabN

        $tabControl.after('<div class="jtabs-progress-bar hidden"></div>');

        $tabs.each(function(){
            var $currentTab = $(this);
            $currentTab.find('a').addClass('jlink');
            var $currentContent = getContentForTab( $currentTab );
            $currentContent.addClass('jtabs-content').hide();
        });

        $tabs.on('click', 'a.jlink', function(e){
            if( !settings.urlRouting ){
                var $tab = $(this).parent();
                changeActiveTabTo( $tab );
                e.preventDefault();
            }
        });

        //**** Dynamic Page Loading Feature ****//
        if ( settings.dynamicTabs.length > 0 ){

        }

        //**** URL Routing Feature ****//
        if(settings.urlRouting) {
            $(window)
                .on('hashchange', function () {
                    var tabFromHash = $tabs.find('[href="' + location.hash + '"]').parent()[0],
                        $possibleTab = tabFromHash ? $(tabFromHash) : $tabs.eq(0);
                    changeActiveTabTo( $possibleTab );
                    if($possibleTab.find('.jlink').hasClass('dynamic')){
                        $possibleTab.find('.jlink').trigger('click');
                    }
                })
                .trigger('hashchange');
        }
        else {
            changeActiveTabTo( $tabs.eq(0) );
        }

        //**** Closing Tab Feature ****//

        if(settings.closeable) {
            $tabs.on('dblclick', 'a.jlink', function(e){
                var $currentTab = $(this).parent(),
                    $visibleTabs = $currentTab.siblings().not('.hidden');

                if ( $visibleTabs.length ) {
                    var $newActiveTab = $visibleTabs.eq(0);
                    changeActiveTabTo($newActiveTab);
                    $currentTab.addClass('hidden').hide();
                    if($newActiveTab.find('.jlink').hasClass('dynamic')){
                        $newActiveTab.find('.jlink').trigger('click');
                    }

                }
            });
        }

        return this;


        function changeActiveTabTo($activeTabPretender){
            if($activeTab && $activeContent) {
                $activeTab.removeClass('active');
                $activeContent.hide();
            }

            $activeTab = $activeTabPretender;
            $activeContent = getContentForTab( $activeTabPretender);
            location.hash = (settings.urlRouting) ? getHashFromTab($activeTab) : '';

            $activeTab.addClass( 'active' );
            $activeContent.show();
        }

        function getContentForTab($tab){
           return $( getHashFromTab($tab) );
        }

        function getHashFromTab($tab){
            return $tab.find('.jlink')[0].hash;
        }
    };




    var Themes = {
        'default' : 0,
        'dragon' : 1,
        'grass' : 2
    };

})(  jQuery );
