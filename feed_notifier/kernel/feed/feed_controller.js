/**
* Module that handles all the opertations related to managing feed configuration in the persistant storage
* @module FeedKernel/FeedController
*/

var FeedController=(function(){
  var _FeedController={};

  var _CurrentFeeds=[];

  var GetNewFeedId=function(){
      return (new Date()).getTime();
  };

  _FeedController.InsertNewFeed=function(){
    _CurrentFeeds.push({
      "id":GetNewFeedId(),
      "desc":"",
      "icon":"",
      "url":"",
      "interval":"34",
      "items_unread":"Not configured, ",
      "updatedDate":"",
      "active":false
    });
  };

  _FeedController.GetAllFeeds=function(feed){
    return _CurrentFeeds;
  };

  _FeedController.GetAFeed=function(feedId){
    _CurrentFeeds.forEach(function(feed){
      if(feed.id===feedId){
        return feed;
      }
    });

    throw new Error("No such feed (" + feedId + ")!");
  };


  _FeedController.Init=function(){
    Notifications.Show("InitController");
  };

  _FeedController.UpdateAFeed=function(feedUpdated){
    _CurrentFeeds.forEach(function(feed){
      if(feed.id===feedUpdated.id){
        for(var prop in feedUpdated){
          if(feedUpdated.hasOwnProperty(prop)){
            feed[prop]=feedUpdated[prop];
          }
        }
        console.log("feed " + feedUpdated.id + " updated!");
        return;
      }
    });
  };

  _FeedController.DeleteAFeed=function(feedId){
    var feed_index=0;
    _CurrentFeeds.forEach(function(feed){
      if(feed.id===feedId){
        _CurrentFeeds.splice(feed_index,1);
        console.log("feed " + feedId + " deleted!");
        return;
      }
      feed_index++;
    });
  };

  return _FeedController;
}());
