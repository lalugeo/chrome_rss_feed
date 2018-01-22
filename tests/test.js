var expect = require('expect');

describe("FeedNotifier Suite", function(){
  describe("Kernel", function(){
    describe("Notifications", function(){
      it("T1",function(){
        expect(1).toBe(1);
      });
    });

    describe("Feed", function(){
      describe("FeedController", function(){
        it("T1",function(){
          // expect(1).toBe(1);
          // require('../feed_notifier/kernel/feed/feed_controller.js');
          //
          // FeedController.InsertNewFeed();
        });
      });

      describe("FeedReader", function(){
        it("T1",function(){
          expect(1).toBe(1);
        });
      });
    });
  });

  describe("UI", function(){
    it("T1",function(){
      expect(1).toBe(1);
    });
  });

});
