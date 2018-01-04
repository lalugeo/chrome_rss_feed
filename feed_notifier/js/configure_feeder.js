var feedNotifier = angular.module('feedNotifier', []);
feedNotifier.controller("FeedsConfigurer",
  function($scope){
    $scope.feeds = [];

    $scope.DisplayError=function(err){

    };

    $scope.BindFeeds=function(){
      FeedController.GetAllFeeds()
      .then(function(feeds){
        console.log("got feeds " + JSON.stringify(feeds));
        $scope.feeds=feeds;
      })
      .catch(function(err){
        Materialize.toast('Could not fetch the feeds! ' + err, 4000);
      })
      ;
    };


    $scope.AddNewFeed=function(){
      console.log("adding new feed");
      FeedController.InsertNewFeed()
      .then(function(){
        Materialize.toast("Feed inserted", 4000);
      })
      .catch(function(err){
        Materialize.toast('Could not fetch the feeds! ' + err, 4000);
      });
    };

    $scope.DeleteFeed=function(feedId){
      console.log("deleting feed " + feedId);
      FeedController.DeleteAFeed(feedId)
      .then(function(){
        Materialize.toast("Feed deleted", 4000);
      })
      .catch(function(err){
        Materialize.toast('Could not delete the feed! ' + err, 4000);
      });
    };

    $scope.SaveFeed=function(feedId){
      console.log("saving feed " + feedId);
      FeedController.UpdateAFeed(feedId)
      .then(function(){
        Materialize.toast("Feed saved", 4000);
      })
      .catch(function(err){
        Materialize.toast('Could not save the feed! ' + err, 4000);
      });
    };

    $scope.BindFeeds();
  }
);
