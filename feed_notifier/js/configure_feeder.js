var feedNotifier = angular.module('feedNotifier', []);
feedNotifier.controller("FeedsConfigurer",
  function($scope){
    $scope.feeds = [];


    $scope.BindFeeds=function(){
      return new Promise(function(resolve,reject){
        console.log("fetching all feeds");
        $scope.feeds=FeedController.GetAllFeeds();
        resolve();
      });
    };


    $scope.AddNewFeed=function(){
      console.log("adding new feed");
      return new Promise(function(resolve,reject){
        FeedController.InsertNewFeed();
        resolve();
      });
      //.then($scope.BindFeeds);
    };

    $scope.DeleteFeed=function(feedId){
      console.log("deleting feed " + feedId);
      return new Promise(function(resolve,reject){
        FeedController.DeleteAFeed(feedId);
        resolve();
      });
    };

    $scope.SaveFeed=function(){
      //console.log("saving feed " + JSON.stringify(feed));
      return new Promise(function(resolve,reject){
        //FeedController.UpdateAFeed(feed);
        resolve();
      });
      //.then($scope.BindFeeds);
    };

    $scope.BindFeeds();
  }
);
