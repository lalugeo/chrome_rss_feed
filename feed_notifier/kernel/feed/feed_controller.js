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
        "updatedDate":"2017 Mar 12"
      },
      {
        "id":"twitter",
        "desc":"My tweets",
        "icon":"",
        "url":"https://gmail.com",
        "interval":"45",
        "updatedDate":"2018 Jan 02"
      },
      {
        "id":"fb",
        "desc":"My posts",
        "icon":"",
        "url":"https://gmail.com",
        "interval":"10",
        "updatedDate":"2016 Feb 17"
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
