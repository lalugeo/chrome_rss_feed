
/**
* All the operations related to the extension, like installation, update, initialisation etc is handled here
* @module FeedKernel
*/
chrome.runtime.onStartup.addListener(function() {
  console.log("got startup");
  Notifications.Show("StartupMessage");
});


chrome.runtime.onInstalled.addListener(function() {
  console.log("Installed the runtime for feed notifier");
  FeedController.Init();
  FeedReader.RegisterAllFeeds();
  Notifications.Show("WelcomeMessage");
});
