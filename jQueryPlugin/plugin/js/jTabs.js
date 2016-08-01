/**
 * Created by andrei.maksimchanka on 7/22/2016.
 */

(function ($) {

    $.fn['jtabs'] = function (options) {
        return $.data(this, 'jtabs', new JTabsPlugin(this, options));
    };

    class JTabsPlugin {

        constructor(element, options) {
            this.settings = this.initSettings(options);
            this.$widget = $(element).addClass('jtabs-widget');                                                         // div.jtabs-widget
            this.$tabControl = this.$widget
                .children('ul')
                .first()
                .addClass('jtabs-nav');                                                                                 // ul.jtabs-nav
            this.$tabs = this.$tabControl
                .children('li')
                .addClass('jtab');                                                                                      // [li.jtab, ...]
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
            this.settings.closeable && this.initClosingTabsFeature();
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
            getContentForTab( this.$tabs ).addClass('jtabs-content').hide();
            this.$tabs.on('click', 'a.jlink', function (e) {
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

                    self.changeActiveTabTo($newActiveTab);
                    $tab.addClass('closed').hide();

                    let $activeLink = $newActiveTab.find('.jlink');

                    if ($activeLink.hasClass('dynamic')) {
                        $activeLink.trigger('click');
                    }
                }
            });
        }

        initDynamicTabsFeature() {
            const self = this;
            this.settings.dynamicTabs.forEach(function (tab) {
                if (!self.$tabs[tab.number - 1]) {
                    return;
                }

                self.$tabs
                    .eq(tab.number - 1)
                    .find('.jlink')
                    .addClass('dynamic')
                    .on('click', function () {
                        if (!$('#tab' + tab.number).html().trim()) {
                            self.loadContentForTab(tab);                                                                //if content hasn't been loaded yet, do it now.
                        }
                    });
            });
        }

        loadContentForTab(tab) {
            this.showProgressBar();

            if (tab.load) {
                let nextStep = tab.load(this.renderTab.bind(this, tab));
                if (nextStep instanceof Promise) {
                    nextStep.then(this.renderTab.bind(this, tab));
                }
            } else if (tab.url) {
                $.ajax(tab.url || '')
                    .then(this.renderTab.bind(this, tab))
                    .catch((response) => this.renderTab(tab, response.responseText));
            }
        }

        renderTab(tab, html) {
            $('#tab' + +tab.number).html(html);
            this.hideProgressBar();
        }

        initUrlRoutingFeature() {
            $(window).on('hashchange', () => {
                const tabFromHash = this.$tabs
                        .find('[href="' + location.hash + '"]')
                        .parent()[0],
                    $tab = tabFromHash ? $(tabFromHash) : this.$tabs.first();

                this.changeActiveTabTo($tab);
                let $activeLink = $tab.find('.jlink');

                if ($activeLink.hasClass('dynamic')) {
                    $activeLink.trigger('click');
                }
            }).trigger('hashchange');
        }

        changeActiveTabTo($tab) {
            if (this.$activeTab && this.$activeContent) {
                this.$activeTab.removeClass('active');
                this.$activeContent.hide();
            }

            this.$activeTab = $tab;
            this.$activeContent = getContentForTab($tab).first();

            location.hash = this.settings.urlRouting ? getHashFromTab(this.$activeTab)[0] : '';

            this.$activeTab.addClass('active');
            this.$activeContent.show();
        }

        showProgressBar() {
            this.$progressBar.removeClass('hidden');
        }

        hideProgressBar() {
            this.$progressBar.addClass('hidden');
        }
    }

    let getContentForTab = ($tab) => $( getHashFromTab($tab).map( elem => $(elem)[0] ));
    let getHashFromTab = ($tab) => $tab.find('.jlink').toArray().map( elem => elem.hash );

})(jQuery);
