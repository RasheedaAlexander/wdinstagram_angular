"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("wdinstagram", [
    "ui.router",
    "wdinstagrams"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdinstagramIndex", {
      url: "/wdinstagrams",
      templateUrl: "js/wdinstagrams/index.html",
      controller: "WdinstagramIndexController",
      controllerAs: "WdinstagramIndexViewModel"
    })
    .state("wdinstagramShow", {
      url: "/wdinstagrams/:id",
      templateUrl: "js/wdiInstagrams/show.html",
      controller: "WdinstagramShowController",
      controllerAs: "WdinstagramShowViewModel"
    });
  }
}());
