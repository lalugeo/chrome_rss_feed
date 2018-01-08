/* global angular, Materialize, FeedController */
const feedNotifier = angular.module("feedNotifier", []);
feedNotifier.controller("FeedsConfigurer", ($scope) => {
  $scope.feeds = [];

  $scope.BindFeeds = () => {
    FeedController.GetAllFeeds()
      .then((feeds) => {
        $scope.feeds = feeds;
      })
      .catch((err) => {
        Materialize.toast(`Could not fetch the feeds! ${err}`, 4000);
      });
  };

  $scope.AddNewFeed = () => {
    FeedController.InsertNewFeed()
      .then(() => {
        Materialize.toast("Feed inserted", 2000);
      })
      .catch((err) => {
        Materialize.toast(`Could not fetch the feeds! ${err}`, 4000);
      });
  };

  $scope.DeleteFeed = (feedId) => {
    FeedController.DeleteAFeed(feedId)
      .then(() => {
        Materialize.toast("Feed deleted", 2000);
      })
      .catch((err) => {
        Materialize.toast(`Could not delete the feed! ${err}`, 4000);
      });
  };

  $scope.SaveFeed = (feedId) => {
    FeedController.UpdateAFeed(feedId)
      .then(() => {
        Materialize.toast("Feed saved", 2000);
      })
      .catch((err) => {
        Materialize.toast(`Could not save the feed! ${err}`, 4000);
      });
  };

  $scope.BindFeeds();
});
