/* globals chrome */
/**
* Module that handles all the opertations related to managing feed configuration
* in the persistant storage
* @module FeedKernel/FeedController
*/

const FeedController = (function FeedController() { // eslint-disable-line no-unused-vars
  const _FeedController = {};

  let _CurrentFeeds = [];
  let _InitMode = true;

  const _GetNewFeedId = () => (new Date()).getTime();

  const _SyncFeedReaders = () => (
    new Promise((resolve) => {
      resolve();
    })
  );

  const _SyncStoragePersistance = () => (
    new Promise((resolve) => {
      const feedObj = {
        Feeds: _CurrentFeeds,
      };
      chrome.storage.sync.set(feedObj, () => {
        resolve();
      });
    })
  );


  _FeedController.InsertNewFeed = () => (
    new Promise((resolve) => {
      _CurrentFeeds.push({
        id: _GetNewFeedId(),
        desc: "",
        icon: "",
        url: "",
        interval: "",
        items_unread: 0,
        updatedDate: "",
        active: false,
      });
      resolve();
    }).then(_SyncStoragePersistance)
  );

  _FeedController.GetAllFeeds_Sync = () => _CurrentFeeds;

  _FeedController.GetAllFeeds = () => (
    new Promise((resolve) => {
      if (_InitMode) {
        chrome.storage.sync.get("Feeds", (feedsObj) => {
          let _feedsObj = feedsObj;
          if (!_feedsObj) {
            _feedsObj = {};
          }
          if (!_feedsObj.Feeds) {
            _feedsObj.Feeds = [];
          }

          _InitMode = false;
          _CurrentFeeds = _feedsObj.Feeds;
          resolve(_CurrentFeeds);
        });
      } else {
        resolve(_CurrentFeeds);
      }
    })
  );

  _FeedController.GetAFeed = feedId => (
    new Promise((resolve, reject) => {
      _CurrentFeeds.forEach((feed) => {
        if (feed.id === feedId) {
          resolve(feed);
        }
      });
      reject(new Error(`No such feed ( ${feedId})!`));
    })
  );


  _FeedController.Init = () => (
    new Promise((resolve) => {
      resolve();
    })
  );

  _FeedController.UpdateAFeed = () => (
    new Promise((resolve) => {
      resolve();
    }).then(_SyncStoragePersistance)
      .then(_SyncFeedReaders)
  );

  _FeedController.DeleteAFeed = feedId => (
    new Promise((resolve, reject) => {
      let feedIndex = 0;
      _CurrentFeeds.forEach((feed) => {
        if (feed.id === feedId) {
          _CurrentFeeds.splice(feedIndex, 1);
          resolve();
        }
        feedIndex += 1;
      });
      reject(new Error(`feed ${feedId} not found!`));
    }).then(_SyncStoragePersistance)
  );

  return _FeedController;
}());
