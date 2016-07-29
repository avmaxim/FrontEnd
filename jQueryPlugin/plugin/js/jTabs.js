/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function($) {

    $.fn[ 'jtabs' ] = function( options ) {
        return $.data(this, 'jtabs', new JTabsPlugin(this, options));
    };

    class JTabsPlugin {

        constructor(element, options) {
            this.settings = this.initSettings(options);
            this.$widget = $(element).addClass('jtabs-widget');                                                             // div.jtabs-widget
            this.$tabControl = this.$widget.children('ul').first().addClass('jtabs-nav');                                   // ul.jtabs-nav
            this.$tabs = this.$tabControl.children('li').addClass('jtab');                                                  // [li.jtab, ...]
            this.$activeTab = undefined;                                                                                    // li.jtab.active
            this.$activeContent = undefined;                                                                                // div#tabN
            this.$progressBar = undefined;
            this.init();
        };

        initSettings(options) {
            const defaults = {
                theme: 'material',
                urlRouting: false,
                closeable: false,
                dynamicTabs: []
            };
            return $.extend(defaults, options);
        }

        init() {
            this.initProgressBar();
            this.initTabsWithContent();
            this.settings.closeable &&  this.initClosingTabsFeature();
            this.settings.dynamicTabs.length && this.initDynamicTabsFeature();
            this.settings.urlRouting ? this.initUrlRoutingFeature() : this.changeActiveTabTo(this.$tabs.first());
        }

        initProgressBar(options) {
            this.$tabControl.after('<div class="jtabs-progress-bar hidden"></div>');
            this.$progressBar = $('.jtabs-progress-bar');
        }

        initTabsWithContent() {
            const self = this;
            this.$tabs.find('a').addClass('jlink');
            this.$tabs
                .each(function () {
                    getContentForTab($(this)).addClass('jtabs-content').hide();
                })
                .on('click', 'a.jlink', function (e) {
                    if (!self.settings.urlRouting) {
                        self.changeActiveTabTo($(this).parent());
                        e.preventDefault();
                    }
                });
        }

        //**** Closeable Tab Feature ****//
        initClosingTabsFeature() {
            const self = this;
            this.$tabs.on('dblclick', 'a.jlink', function (e) {
                const $tab = $(this).parent(),
                    $visibleTabs = $tab.siblings().not('.closed');

                if ($visibleTabs.length > 0) {
                    const $newActiveTab = $visibleTabs;

                    self.changeActiveTabTo( $newActiveTab );
                    $tab.addClass('closed').hide();

                    if ($newActiveTab.find('.jlink').hasClass('dynamic')) {
                        $newActiveTab.find('.jlink').trigger('click');
                    }
                }
            });
        }

        initDynamicTabsFeature() {
            const self = this;
            this.settings.dynamicTabs.forEach(function (tab) {
                if  (!self.$tabs[tab.number - 1]) return;

                self.$tabs.eq(tab.number - 1).find('.jlink').addClass('dynamic').on('click', function () {
                    if (!$('#tab' + tab.number).html().trim())  self.loadContentForTab(tab);                             //if content hasn't been loaded yet, do it now.
                });
            });
        }

        loadContentForTab( tab ) {
            const self = this;
            this.showProgressBar();

            if ( tab.load ){
                let nextStep = tab.load(callback);
                if ( nextStep instanceof Promise) nextStep.then(callback);
            }
            else if ( tab.url ) {
                setTimeout(() => {
                    $.ajax(tab.url || '').fail(callback).done(callback)
                }, Math.random() * 3000);
            }
            function callback(html){
                $('#tab' + +tab.number).html(html);
                self.hideProgressBar();
            }
        }

        initUrlRoutingFeature() {
            const self = this;
            $(window).on('hashchange', function (){
                const tabFromHash = self.$tabs.find('[href="' + location.hash + '"]').parent()[0],
                    $tab = tabFromHash ? $(tabFromHash) : self.$tabs.first();

                self.changeActiveTabTo($tab);
                if ($tab.find('.jlink').hasClass('dynamic')) {
                    $tab.find('.jlink').trigger('click');
                }
            }).trigger('hashchange');
        }

        changeActiveTabTo($tab) {
            if (this.$activeTab && this.$activeContent) {
                this.$activeTab.removeClass('active');
                this.$activeContent.hide();
            }
            this.$activeTab = $tab;
            this.$activeContent = getContentForTab($tab);

            location.hash = this.settings.urlRouting ? getHashFromTab(this.$activeTab) : '';

            this.$activeTab.addClass('active');
            this.$activeContent.show();
        }

        showProgressBar () { this.$progressBar.removeClass('hidden'); }
        hideProgressBar () { this.$progressBar.addClass('hidden'); }
    }

    let getContentForTab = ($tab) => $( getHashFromTab( $tab ) );
    let getHashFromTab = ($tab) => $tab.find('.jlink')[0].hash ;

})(  jQuery);
