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
  .state("entryNew", {
    url: "/entries/new",
    templateUrl: "js/entries/new.html",
    controller: "EntryNewController",
    controllerAs: "EntryNewViewModel"
  })
    .state("entryShow", {
      url: "/entries/:id",
      templateUrl: "js/entries/show.html",
      controller: "EntryShowController",
      controllerAs: "EntryShowViewModel"
    })
    .state("entryEdit", {
      url: "/entries/:id/edit",
      templateUrl: "js/entries/edit.html",
      controller: "EntryEditController",
      controllerAs: "EntryEditViewModel"
    });
  }
}());
