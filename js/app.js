"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("entry", [
    "ui.router",
    "entries"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("entryIndex", {
      url: "/entries",
      templateUrl: "js/entries/index.html",
      controller: "EntryIndexController",
      controllerAs: "EntryIndexViewModel"
    })
    .state("entryShow", {
      url: "/entries/:id",
      templateUrl: "js/entries/show.html",
      controller: "EntryShowController",
      controllerAs: "entryShowViewModel"
    });
  }
}());
