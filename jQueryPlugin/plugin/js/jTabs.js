/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $.fn.jtabs = function(options){

        var defaults = {
                theme: 'grass',
                urlRouting: false,
                canBeClosed: false
            };

        var settings = $.extend(defaults, options);

        var $widget = $(this).addClass('jtabs-widget');
        var $tabControl = $widget.children('ul').eq(0).addClass('jtabs-nav');

        var $tabs = $tabControl.children('li').addClass('jtab');
        $tabs.find('a').addClass('jlink');

        var $activeTab = $tabs.eq(0).addClass('active');
        var $activeContent = getContentForTab( $activeTab );

        $tabs.each(function(){
            var $currentContent = getContentForTab( $(this) );
            $currentContent.hide().addClass('jtabs-content');
        });

        $activeContent.show();

        $tabs.on('click', 'a.jlink', function(e){
            var $tab = $(this).parent();
            changeActiveTabTo($tab);
            if(!settings.urlRouting)
                e.preventDefault();
        });

        if(settings.canBeClosed) {
            $tabs.append('<span class="close-tab-btn" >x</span>');

            $('.close-tab-btn').on('click', function (e) {
                var $closeBtn = $(this);
                var $currentTab = $closeBtn.parent();

                var $visibleTabs = $currentTab.siblings().not('.hidden');

                if ($visibleTabs.length) {
                    changeActiveTabTo( $visibleTabs.eq(0) );
                    $currentTab.hide();
                    $currentTab.addClass('hidden');
                }

            });
        }

        return this;


        function changeActiveTabTo($activeTabPretender){
            $activeTab.removeClass( 'active' );
            $activeContent.hide();

            $activeTab = $activeTabPretender;
            $activeContent = getContentForTab( $activeTabPretender) ;

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
