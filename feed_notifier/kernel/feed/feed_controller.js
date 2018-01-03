/**
* Module that handles all the opertations related to managing feed configuration in the persistant storage
* @module FeedKernel/FeedController
*/

var FeedController=(function(){
  var _FeedController={};

  var _CurrentFeeds=[];

  var GetNewFeedId=function(){
      return 100;
  };

  _FeedController.InsertNewFeed=function(){
    _CurrentFeeds.push({
      "id":GetNewFeedId(),
      "desc":"new feed",
      "icon":"",
      "url":"",
      "interval":"20",
      "items_unread":"Not configured",
      "updatedDate":"",
      "active":false
    });
  };

  _FeedController.GetAllFeeds=function(feed){
    if(_CurrentFeeds.length===0){
      _FeedController.InsertNewFeed();
    }
    return _CurrentFeeds;
  };

  _FeedController.GetAFeed=function(feedId){
    return feed;
  };


  _FeedController.Init=function(){
    Notifications.Show("InitController");
  };

  _FeedController.UpdateAFeed=function(feed){

  };

  return _FeedController;
}());
