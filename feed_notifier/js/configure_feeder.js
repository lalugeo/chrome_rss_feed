/* global angular, Materialize, FeedController */
const feedNotifier = angular.module("feedNotifier", []);
feedNotifier.controller("FeedsConfigurer", ($scope) => {
  $scope.feeds = [];
  $scope.BindFeeds = () => {
    FeedController.GetAllFeeds()
      .then((feeds) => {
        // console.log("got feeds " + JSON.stringify(feeds));
        $scope.feeds = feeds;
      })
      .catch((err) => {
        Materialize.toast(`Could not fetch the feeds! ${err}`, 4000);
      });
  };

  $scope.AddNewFeed = () => {
    // console.log("adding new feed");
    FeedController.InsertNewFeed()
      .then(() => {
        Materialize.toast("Feed inserted", 4000);
      })
      .catch((err) => {
        Materialize.toast(`Could not fetch the feeds! ${err}`, 4000);
      });
  };

  $scope.DeleteFeed = (feedId) => {
    // console.log("deleting feed " + feedId);
    FeedController.DeleteAFeed(feedId)
      .then(() => {
        Materialize.toast("Feed deleted", 4000);
      })
      .catch((err) => {
        Materialize.toast(`Could not delete the feed! ${err}`, 4000);
      });
  };

  $scope.SaveFeed = (feedId) => {
    // console.log("saving feed " + feedId);
    FeedController.UpdateAFeed(feedId)
      .then(() => {
        Materialize.toast("Feed saved", 4000);
      })
      .catch((err) => {
        Materialize.toast(`Could not save the feed! ${err}`, 4000);
      });
  };

  $scope.BindFeeds();
});
