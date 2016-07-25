var expect = chai.expect;


describe('Dynamic Page Loading Feature', function() {

    it('should', function() {
       
    });

});

describe('Closing Tab Feature', function() {

    it('should be 1 active tab and others hidden if we close tab', function() {
        $( ".tabs" ).jtabs({
            closeable: true,
            urlRouting: false,
            dynamicTabs: []
        });
        $('[href="#tab1"]').trigger("dblclick");
        var closedTabsCount =  $(".jtab.closed").length,
            activeTabsCount = $('.jtab.active').length,
            totalTabsCount =  $(".jtab").length,
            visibleTabsContentCount = $('.jtabs-content').filter(function(){
                                                                var match = 'none';
                                                                return ( $(this).css('display') != match );
                                                            }).length;

        expect( closedTabsCount ).to.be.equal( 1);
        expect( activeTabsCount ).to.be.equal(1);
        expect( visibleTabsContentCount ).to.be.equal(1);

    });

});

describe('URL Routing Feature', function() {

    it('', function() {

    });

});

describe('Mixed tests', function() {

    it('', function() {
        $( ".tabs" ).jtabs({
            closeable: true,
            urlRouting: true,
            dynamicTabs: []
        });

        expect( window.location.hash ).to.be.eql( '#tab1' );

        var activeTabsCount = $('.jtab.active').length,
            visibleTabsContentCount = $('.jtabs-content').filter(function(){
                var match = 'none';
                return ( $(this).css('display') != match );
            }).length;
        
        expect( activeTabsCount ).to.be.equal(1);
        expect( visibleTabsContentCount ).to.be.equal(1);

    });

});