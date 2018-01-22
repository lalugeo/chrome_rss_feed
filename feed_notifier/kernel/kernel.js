/* globals chrome,FeedController, FeedReader, Notifications */

/**
* All the operations related to the extension, like installation, update,
* initialisation etc is handled here
* @module FeedKernel
*/

chrome.runtime.onStartup.addListener(() => {
  FeedController.Init()
    .then(FeedReader.UnRegisterAllFeeds)
    .then(FeedReader.RegisterAllFeeds);
  Notifications.Show("WelcomeMessage");
});

chrome.alarms.onAlarm.addListener(feedAlarm => (
  new Promise((resolve, reject) => {
    chrome.notifications.create({
      type: "basic",
      title: "NewFeed",
      message: `New feed found by kernel ${feedAlarm.name}`,
      iconUrl: "/feed_notifier/ico/icon128.png",
    });
    resolve(feedAlarm); // todo
    reject(feedAlarm); // todo
  })
));
