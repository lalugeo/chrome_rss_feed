/* globals chrome */
/**
* Module that handles all the opertations related to reading, registering and
* unregisting a feed for notification checks
* @module FeedKernel/FeedReader
*/

const FeedReader = (function FeedReader() { // eslint-disable-line no-unused-vars
  const _FeedReader = {};

  _FeedReader.RegisterNewFeed = feed => new Promise((resolve) => {
    chrome.alarms.create(feed.desc, {
      periodInMinutes: feed.interval,
    });
    resolve();
  });


  _FeedReader.UnRegisterFeed = feed => new Promise((resolve, reject) => {
    chrome.alarms.clear(feed.desc, (wasCleared) => {
      if (wasCleared) {
        resolve();
      } else {
        reject();
      }
    });
  });

  _FeedReader.RegisterAllFeeds = (feeds) => {
    const registerAll = [];
    feeds.forEach((feed) => {
      registerAll.push(_FeedReader.RegisterFeed(feed));
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

  _FeedReader.ReadFeed = () => ( // use feed
    new Promise((resolve, reject) => {
      // todo
      resolve(); // todo
      reject(); // todo
    })
  );

  return _FeedReader;
}());
