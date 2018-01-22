/* globals chrome */
/**
* Module that handles all the opertations related to reading, registering and
* unregisting a feed for notification checks
* @module FeedKernel/FeedReader
*/

const FeedReader = (function FeedReader() { // eslint-disable-line no-unused-vars
  const _FeedReader = {};

  _FeedReader.RegisterNewFeed = feed => new Promise((resolve) => {
    if (feed.active) {
      chrome.alarms.create(feed.id, {
        periodInMinutes: feed.interval,
      });
      resolve(feed);
    } else {
      resolve(feed);
    }
  });


  _FeedReader.UnRegisterFeed = feed => new Promise((resolve) => {
    chrome.alarms.clear(feed.id, (wasCleared) => {
      if (wasCleared) {
        resolve(feed);
      } else {
        resolve(feed);
      }
    });
  });

  _FeedReader.RegisterAllFeeds = (feeds) => {
    const registerAll = [];
    feeds.forEach((feed) => {
      registerAll.push(_FeedReader.RegisterNewFeed(feed));
    });
    return Promise.all(registerAll);
  };

  _FeedReader.UnRegisterAllFeeds = (feeds) => {
    const unregisterAll = [];
    feeds.forEach((feed) => {
      unregisterAll.push(_FeedReader.UnRegisterFeed(feed));
    });
    return Promise.all(unregisterAll);
  };

  return _FeedReader;
}());
