/**
* Module that handles all the opertations related to managing feed configuration in the persistant storage
* @module FeedKernel/FeedController
*/

var FeedController=(function(){
  var _FeedController={};

  var _CurrentFeeds=[];

  _FeedController.InsertNewFeedForMonitoring=function(feed){

  };

  _FeedController.GetAllFeeds=function(feed){
    return [
      {
        "id":"gmail",
        "desc":"My email",
        "icon":"",
        "url":"https://gmail.com",
        "interval":"20",
        "updatedDate":"2017 March 12"
      }
    ];
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
