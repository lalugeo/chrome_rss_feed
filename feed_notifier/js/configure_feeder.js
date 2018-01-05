const feedNotifier = angular.module("feedNotifier", []);// eslint-disable-line no-undef
feedNotifier.controller("FeedsConfigurer", ($scope) => {
  $scope.feeds = [];
  $scope.BindFeeds = () => {
    FeedController.GetAllFeeds()// eslint-disable-line no-undef
      .then((feeds) => {
        // console.log("got feeds " + JSON.stringify(feeds));
        $scope.feeds = feeds;
      })
      .catch((err) => {
        Materialize.toast(`Could not fetch the feeds! ${err}`, 4000);// eslint-disable-line no-undef
      });
  };


  $scope.AddNewFeed = () => {
    // console.log("adding new feed");
    FeedController.InsertNewFeed() // eslint-disable-line no-undef
      .then(() => {
        Materialize.toast("Feed inserted", 4000);// eslint-disable-line no-undef
      })
      .catch((err) => {
        Materialize.toast(`Could not fetch the feeds! ${err}`, 4000);// eslint-disable-line no-undef
      });
  };

  $scope.DeleteFeed = (feedId) => {
    // console.log("deleting feed " + feedId);
    FeedController.DeleteAFeed(feedId)// eslint-disable-line no-undef
      .then(() => {
        Materialize.toast("Feed deleted", 4000);// eslint-disable-line no-undef
      })
      .catch((err) => {
        Materialize.toast(`Could not delete the feed! ${err}`, 4000);// eslint-disable-line no-undef
      });
  };

  $scope.SaveFeed = (feedId) => {
    // console.log("saving feed " + feedId);
    FeedController.UpdateAFeed(feedId)// eslint-disable-line no-undef
      .then(() => {
        Materialize.toast("Feed saved", 4000);// eslint-disable-line no-undef
      })
      .catch((err) => {
        Materialize.toast(`Could not save the feed! ${err}`, 4000);// eslint-disable-line no-undef
      });
  };

  $scope.BindFeeds();
});
