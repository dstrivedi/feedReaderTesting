
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('URL not empty',function() {
            for(var i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
         });

         it('Name not empty',function() {
            for(var i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });
    });

    describe('The menu',function() {

         it('hiding showing menu',function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         it('menu visibility',function() {
                if($('menu-icon-link').click()) {
                    expect($('body').hasClass('menu-hidden')).toEqual(true);
                } else {
                    expect($('body').hasClass('menu-hidden')).toEqual(false);
                }
          });
    });


    describe('Initial Entries',function() {

        beforeEach(function(done) {
            loadFeed(0, done);
         });

        it('Entry in Feed',function() {
            var entryNumber = $('.feed .entry').length;
            expect(entryNumber).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection',function() {

        var firstFeed,
            secondFeed;

        beforeEach(function(done) {
            loadFeed(0,function() {
                firstFeed = $('.feed').html();
                loadFeed(1,function() {
                    done();
                });
            });
        });

        it('New feed loaded content changes',function() {
            expect(firstFeed).toBeDefined();
            secondFeed = $('.feed').html();
            expect(secondFeed).toBeDefined();
            expect(firstFeed).not.toEqual(secondFeed);
        });

    });

}());