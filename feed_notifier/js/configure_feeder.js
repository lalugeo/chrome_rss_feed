var feedNotifier = angular.module('feedNotifier', []);


function FeedsConfigurer($scope, $http){
  $scope.feeds = [];


  $scope.LoadFeeds=function(){
    return new Promise(function(resolve,reject){
      $scope.feeds=FeedController.GetAllFeeds();
    });
  };



  $scope.LoadFeeds();
}
