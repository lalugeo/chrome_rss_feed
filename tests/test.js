var expect = require('expect');

describe("FeedNotifier Suite", function(){
  describe("Kernel", function(){
    describe("Notifications", function(){
      it("T1",function(){
        expect(1).to.be(1);
      });
    });

    describe("Feed", function(){
      describe("FeedController", function(){
        it("T1",function(){
          expect(1).to.be(1);
        });
      });

      describe("FeedReader", function(){
        it("T1",function(){
          expect(1).to.be(1);
        });
      });
    });
  });

  describe("UI", function(){
    it("T1",function(){
      expect(1).to.be(1);
    });
  });

});
