var Notifications=(function(){

  var fee="lalu";
  var _NotificationConfigs={
    "WelcomeMessage":{
      type: "basic",
      title: "Feed Notifier added",
      message: "Feed notifier has been added to your browser. Please start by configuring as many RSS feeds that you want :) ",
      iconUrl: "ico/icon48.png"
    },

    "InitController":{
      type: "basic",
      title: "InitController",
      message: "InitController",
      iconUrl: "ico/icon48.png"
    },


    "RegisterAllFeeds":{
      type: "basic",
      title: "RegisterAllFeeds",
      message: "RegisterAllFeeds",
      iconUrl: "ico/icon48.png"
    }

  };
  var _AllNotifications={};

  var _CheckIfNotificationIdExists=function(id){
    if (_NotificationConfigs && _NotificationConfigs[id]) return true;
    return false;
  };

  var _GetNotificationObject=function(id){
    return _NotificationConfigs[id];
  };

  _AllNotifications.Show=function(id){
    if(_CheckIfNotificationIdExists(id)){
      chrome.notifications.create(id,_GetNotificationObject(id));
    }
  };
  return _AllNotifications;
}());
