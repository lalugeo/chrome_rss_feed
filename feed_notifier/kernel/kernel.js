
/**
* All the operations related to the extension, like installation, update, initialisation etc is handled here
* @module FeedKernel
*/

// chrome.app.runtime.onLaunched.addListener(function(launchData) {
//   chrome.app.window.create('../render/configure_feeder.html', {
//     id: "ConfigureFeeder",
//     innerBounds: {
//       width: 500,
//       height: 600,
//       minWidth: 500,
//       minHeight: 600
//     },
//     frame: 'none'
//   });
// });

chrome.runtime.onStartup.addListener(function() {
  //  console.log("got startup");
  // Notifications.Show("StartupMessage");
    // chrome.windows.create('../render/configure_feeder.html', {
    //   id: "ConfigureFeeder",
    //   innerBounds: {
    //     width: 500,
    //     height: 600,
    //     minWidth: 500,
    //     minHeight: 600
    //   },
    //   frame: 'none'
    // });
    console.log("got startup");
    FeedController.Init()
    .then(FeedReader.RegisterAllFeeds)
    ;
    Notifications.Show("WelcomeMessage");
});


chrome.runtime.onInstalled.addListener(function() {
  console.log("Installed the runtime for feed notifier");
  FeedController.Init()
  .then(FeedReader.RegisterAllFeeds)
  ;
  Notifications.Show("WelcomeMessage");
});
