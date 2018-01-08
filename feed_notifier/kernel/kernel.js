/* globals chrome,FeedController, FeedReader, Notifications */

/**
* All the operations related to the extension, like installation, update,
* initialisation etc is handled here
* @module FeedKernel
*/

chrome.runtime.onStartup.addListener(() => {
  FeedController.Init()
    .then(FeedReader.RegisterAllFeeds);
  Notifications.Show("WelcomeMessage");
});


chrome.runtime.onInstalled.addListener(() => {
  FeedController.Init()
    .then(FeedReader.RegisterAllFeeds);
  Notifications.Show("WelcomeMessage");
});
