/* globals chrome */
const Notifications = (function Notifications() { // eslint-disable-line no-unused-vars
  const _NotificationConfigs = {
    WelcomeMessage: {
      type: "basic",
      title: "Feed Notifier added",
      message: "Feed notifier has been added to your browser. Please start by configuring as many RSS feeds that you want :) ",
      iconUrl: "/feed_notifier/ico/icon48.png",
    },

    InitController: {
      type: "basic",
      title: "InitController",
      message: "InitController",
      iconUrl: "/feed_notifier/ico/icon48.png",
    },


    RegisterAllFeeds: {
      type: "basic",
      title: "RegisterAllFeeds",
      message: "RegisterAllFeeds",
      iconUrl: "/feed_notifier/ico/icon48.png",
    },

  };
  const _AllNotifications = {};

  const _CheckIfNotificationIdExists = (id) => {
    if (_NotificationConfigs && _NotificationConfigs[id]) return true;
    return false;
  };

  const _GetNotificationObject = id => _NotificationConfigs[id];

  _AllNotifications.Show = (id) => {
    if (_CheckIfNotificationIdExists(id)) {
      chrome.notifications.create(id, _GetNotificationObject(id));
    }
  };
  return _AllNotifications;
}());
