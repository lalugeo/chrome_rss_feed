/**
* Module that handles all the opertations related to managing feed configuration in the persistant storage
* @module FeedKernel/FeedController
*/

var FeedController=(function(){
  var _FeedController={};

  var _CurrentFeeds=[];
  var _InitMode=true;

  var _GetNewFeedId=function(){
      return (new Date()).getTime();
  };

  var _SyncStoragePersistance=function(){
    return new Promise(function(resolve,reject){
      feedObj={
        "Feeds":_CurrentFeeds
      };
      chrome.storage.sync.set(feedObj, function() {
        console.log("storage synced");
          resolve();
      });
    });
  };
  

  _FeedController.InsertNewFeed=function(){
    return new Promise(function(resolve,reject){
      _CurrentFeeds.push({
        "id":_GetNewFeedId(),
        "desc":"",
        "icon":"",
        "url":"",
        "interval":"",
        "items_unread":0,
        "updatedDate":"",
        "active":false
      });
      resolve();
    }).then(_SyncStoragePersistance);
  };

  _FeedController.GetAllFeeds=function(feed){
    return new Promise(function(resolve,reject){
      if(_InitMode){
        chrome.storage.sync.get("Feeds", function(feedsObj) {
          if(!feedsObj){
            feedsObj={};
          }
          if(!feedsObj.Feeds){
            feedsObj.Feeds=[];
          }

          _InitMode=false;
          _CurrentFeeds=feedsObj.Feeds;
          resolve(_CurrentFeeds);
        });
      }else{
        resolve(_CurrentFeeds);
      }
    });
  };

  _FeedController.GetAFeed=function(feedId){
    return new Promise(function(resolve,reject){
      _CurrentFeeds.forEach(function(feed){
        if(feed.id===feedId){
          resolve(feed);
        }
      });
      reject("No such feed (" + feedId + ")!");
    });
  };


  _FeedController.Init=function(){
    return new Promise(function(resolve,reject){
      resolve();
    });
  };

  _FeedController.UpdateAFeed=function(feedId){
    return new Promise(function(resolve,reject){
      resolve();
    }).then(_SyncStoragePersistance);
  };

  _FeedController.DeleteAFeed=function(feedId){
    return new Promise(function(resolve,reject){
      var feed_index=0;
      _CurrentFeeds.forEach(function(feed){
        if(feed.id===feedId){
          _CurrentFeeds.splice(feed_index,1);
          console.log("feed " + feedId + " deleted!");
          resolve()
        }
        feed_index++;
      });
      reject("feed " + feedId + " not found!");
    }).then(_SyncStoragePersistance);
  };

  return _FeedController;
}());
