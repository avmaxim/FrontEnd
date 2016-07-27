/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $.fn[ 'jtabs' ] = function( options ) {
        return $.data(this, 'jtabs', new JTabsPlugin(this, options));
    };

    function JTabsPlugin(element, options){
        this.settings = this.initSettings( options );
        this.$widget = $(element).addClass('jtabs-widget');                                                             // div.jtabs-widget
        this.$tabControl = this.$widget.children('ul').eq(0).addClass('jtabs-nav');                                     // ul.jtabs-nav
        this.$tabs = this.$tabControl.children('li').addClass('jtab');                                                  // [li.jtab, ...]
        this.$activeTab = undefined;                                                                                    // li.jtab.active
        this.$activeContent = undefined;                                                                                // div#tabN
        this.$progressBar = undefined;
        this.init();
    }

    JTabsPlugin.prototype.init = function(){
        this.initProgressBar();
        this.initTabsWithCorrespondingContent();

        if( this.settings.closeable ) {
            this.initCloseableTabFeature();
        }

        if ( this.settings.dynamicTabs.length > 0 ){
            this.initDynamicTabsFeature();
        }

        if( this.settings.urlRouting ) {
            this.initUrlRoutingFeature();
        }
        else {
            this.changeActiveTabTo( this.$tabs.eq(0) );
        }
    };

    JTabsPlugin.prototype.initSettings = function(options){
        var defaults = {
            theme: 'material',
            urlRouting: false,
            closeable: false,
            dynamicTabs: []
        };
        return $.extend( defaults, options );
    };

    JTabsPlugin.prototype.initProgressBar = function(options){
        this.$tabControl.after('<div class="jtabs-progress-bar hidden"></div>');
        this.$progressBar = $('.jtabs-progress-bar');
    };

    JTabsPlugin.prototype.initTabsWithCorrespondingContent = function(){
        var self = this;
        this.$tabs.find('a').addClass('jlink');
        this.$tabs
                .each( function(){
                    $getContentForTab( $(this) ).addClass( 'jtabs-content' ).hide();
                })
                .on('click', 'a.jlink', function(e){
                    if( !self.settings.urlRouting ){
                        self.changeActiveTabTo( $(this).parent() );
                        e.preventDefault();
                    }
                });
    };

    //**** Closeable Tab Feature ****//
    JTabsPlugin.prototype.initCloseableTabFeature = function(){
        var self = this;
        this.$tabs.on('dblclick', 'a.jlink', function(e){
            var $currentTab = $(this).parent(),
                $visibleTabs = $currentTab.siblings().not('.closed');

            if ( $visibleTabs.length > 0 ) {
                var $newActiveTab = $visibleTabs.eq(0);

                self.changeActiveTabTo( $newActiveTab );
                $currentTab.addClass('closed').hide();

                if( $newActiveTab.find('.jlink').hasClass('dynamic') ){
                    $newActiveTab.find('.jlink').trigger('click');
                }

            }
        });
    };

    //**** Dynamic Page Loading Feature ****//
    JTabsPlugin.prototype.initDynamicTabsFeature = function(){
        var self = this;
        this.settings.dynamicTabs.forEach(function(tab){
            if( !self.$tabs[ tab.number - 1 ] ) {
                return;
            }
            self.$tabs
                    .eq(tab.number - 1)
                    .find('.jlink')
                    .addClass('dynamic')
                    .on('click', function(){
                        //if content hasn't been loaded yet, do it now.
                        if ( !$('#tab' + tab.number).html().trim() ) {
                            self.loadContentForTab(tab);
                        }
                    });
        });
    };

    JTabsPlugin.prototype.loadContentForTab = function(tab) {
        if (tab.url !== undefined){
            this.loadContentViaUrl( tab );
        }
        else if (tab.load !== undefined){
            this.loadContentViaCallback( tab );
        }
        else if (tab.loadAsPromise !== undefined){
            this.loadContentViaPromise( tab );
        }
    };

    JTabsPlugin.prototype.loadContentViaPromise = function(tab){
        var self = this;
        this.showProgressBar();
        tab.loadAsPromise().then( (html) => {
            $('#tab' + +tab.number).html(html);
            self.hideProgressBar();
        });
    };

    JTabsPlugin.prototype.loadContentViaCallback = function(tab){
        var self = this;
        this.showProgressBar();
        tab.load( (html) => {
            $('#tab' + +tab.number).html(html);
            self.hideProgressBar();
        });
    };

    JTabsPlugin.prototype.loadContentViaUrl = function(tab){
        var self = this;
        $.ajax({
            method: 'GET',
            url: tab.url || '',
            beforeSend: function () {
                self.showProgressBar();
            }
        }).fail(function (e) {
            $('#tab' + +tab.number).html(e);
            if (tab.error) {
                tab.error(e);
            }
            self.hideProgressBar();
        }).done(function (response) {
            setTimeout(() => {
                $('#tab' + +tab.number).html(response);
                if (tab.success) {
                    tab.success(response);
                }
                self.hideProgressBar();
            }, 3000);
        })
    };

    //**** URL Routing Feature ****//
    JTabsPlugin.prototype.initUrlRoutingFeature = function(){
        var self = this;
        $(window)
                .on('hashchange', function () {
                    var tabFromHash = self.$tabs.find('[href="' + location.hash + '"]').parent()[0],
                        $possibleTab = tabFromHash ? $(tabFromHash) : self.$tabs.eq(0);

                    self.changeActiveTabTo( $possibleTab );
                    if( $possibleTab.find('.jlink').hasClass('dynamic') ){
                        $possibleTab.find('.jlink').trigger('click');
                    }
                })
                .trigger('hashchange');
    };

    JTabsPlugin.prototype.changeActiveTabTo = function($activeTabPretender){
        if(this.$activeTab && this.$activeContent) {
            this.$activeTab.removeClass('active');
            this.$activeContent.hide();
        }

        this.$activeTab = $activeTabPretender;
        this.$activeContent = $getContentForTab( $activeTabPretender);
        location.hash = (this.settings.urlRouting) ? getHashFromTab(this.$activeTab) : '';

        this.$activeTab.addClass( 'active' );
        this.$activeContent.show();
    };

    JTabsPlugin.prototype.showProgressBar = function(){
        this.$progressBar.removeClass('hidden');
    };

    JTabsPlugin.prototype.hideProgressBar = function(){
        this.$progressBar.addClass('hidden');
    };

    var $getContentForTab = function($tab){
        return $( getHashFromTab( $tab ) );
    };

    var getHashFromTab = function($tab){
        return $tab.find('.jlink')[0].hash;
    };

    //Return JTabsPlugin to Public for Unit-Testing purposes only!!!
    return JTabsPlugin;
})(  jQuery);
