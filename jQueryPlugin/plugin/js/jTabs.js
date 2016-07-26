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

        $tabs.each(function(){
            var $currentTab = $(this);
            $currentTab.find('a').addClass('jlink');
            var $currentContent = getContentForTab( $currentTab );
            $currentContent.addClass('jtabs-content').hide();
        });

        $tabs.on('click', 'a.jlink', function(e){
            if(!settings.urlRouting){
                var $tab = $(this).parent();
                changeActiveTabTo( $tab );
                e.preventDefault();
            }
        });

        if(settings.urlRouting) {
            $(window)
                .on('hashchange', function () {
                    var tabFromHash = $tabs.find('[href="' + location.hash + '"]').parent()[0];
                    changeActiveTabTo( tabFromHash ? $(tabFromHash) : $tabs.eq(0) );
                })
                .trigger('hashchange');
        }
        else {
            changeActiveTabTo( $tabs.eq(0) );
        }

        if(settings.closeable) {
            $tabs.append('<span class="close-tab-btn" >x</span>');

            $('.close-tab-btn').on('click', function (e) {
                var $closeBtn = $(this),
                    $currentTab = $closeBtn.parent(),
                    $visibleTabs = $currentTab.siblings().not('.hidden');

                if ($visibleTabs.length) {
                    changeActiveTabTo( $visibleTabs.eq(0) );
                    $currentTab.addClass('hidden').hide();
                }

            });
        }

        if( settings.dynamicTabs.length ){
            $(".progress-bar").hide();
            var tabs = settings.dynamicTabs;
            for(var i in tabs){
                var index = tabs[i].number - 1;
                if( $tabs[ index ] ) {
                    (function (tab) {
                        $tabs.eq(tab.number - 1).on('click', 'a.jlink', function (e) {
                            $(".progress-bar").show();
                            $.ajax({
                                method: "GET",
                                url: tab.url || '',
                                success: function(responce){
                                    $('#tab' + +tab.number).html(responce);
                                    $(".progress-bar").hide();
                                    tab.success(responce);
                                },
                                error: function(e){
                                    $('#tab' + +tab.number).html(e);
                                    $(".progress-bar").hide();
                                    tab.error(e);
                                }
                            });
                        })
                    })( tabs[i] );
                }
            }
        }

        return this;


        function changeActiveTabTo($activeTabPretender){
            if($activeTab && $activeContent) {
                $activeTab.removeClass('active');
                $activeContent.hide();
            }

            $activeTab = $activeTabPretender;
            $activeContent = getContentForTab( $activeTabPretender);
            location.hash = (settings.urlRouting) ? $activeTab.find('.jlink')[0].hash : '';

            $activeTab.addClass( 'active' );
            $activeContent.show();
        }

        function getContentForTab($tab){
           return $( $tab.find('.jlink')[0].hash );
        }
    };




    var Themes = {
        'default' : 0,
        'dragon' : 1,
        'grass' : 2
    };

})(  jQuery );
