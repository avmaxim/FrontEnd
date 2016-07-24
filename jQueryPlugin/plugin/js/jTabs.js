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

        var $widget = $(this);
        var $tabControl = $widget.children("ul").eq(0);

        var $tabs = $tabControl.find("a");
        var $activeTab = $tabs.eq(0);
        var $content = $( $activeTab[0].hash );

        $widget.addClass( 'jtabs-widget' );
        $tabControl.addClass( 'jtabs-nav' );
        $activeTab.addClass( 'active' );

        $tabs.each(iterateThruTabs);
        
        this.on('click', 'a', onTabClick);
        
        return this;

        function onTabClick(e){

            $activeTab.removeClass( 'active' );
            $content.hide();

            $activeTab = $(this);
            $content = $(this.hash);

            $activeTab.addClass( 'active' );
            $content.show();

            if(!settings.urlRouting)
                e.preventDefault();
        }

        function iterateThruTabs(){
            var self = this;

            if(settings.canBeClosed){
                $('<span class="close-tab-btn" >x</span>')
                    .insertAfter(this)
                    .on('click', function(){
                        var activeTabPretender = $(self).parent().prev()[0];

                        if( !activeTabPretender ) {
                            activeTabPretender = $(self).parent().next()[0];
                        }

                       changeActiveTabTo(activeTabPretender);


                        $(self).hide();
                    })
            }

            if( !$(this).hasClass('active')) {
                $(this.hash).hide();
            }

            $(this.hash).addClass('jtabs-content');
        }

        function changeActiveTabTo(activeTabPretender){
            $activeTab = $(activeTabPretender);

        }
    };




    var Themes = {
        'default' : 0,
        'dragon' : 1,
        'grass' : 2
    };

})(  jQuery );
