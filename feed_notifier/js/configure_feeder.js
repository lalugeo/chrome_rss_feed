var feedNotifier = angular.module('feedNotifier', []);

function FeedsConfigurer($scope, $http){
  $scope.feeds = [];


  $scope.LoadFeeds=function(){
    return new Promise(function(resolve,reject){
      $scope.feeds=FeedController.GetAllFeeds();
    });
  };


  $scope.AddNewFeed=function(){
    console.log("adding new feed");
    return new Promise(function(resolve,reject){
      FeedController.InsertNewFeed();
    }).then($scope.LoadFeeds);
  };

  $scope.LoadFeeds();
}
