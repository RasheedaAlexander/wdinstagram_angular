"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("entry")
  .controller("EntryShowController", [
    "EntryFactory",
    "$stateParams",
    EntryShowControllerFunction
  ]);

  function EntryShowControllerFunction(EntryFactory, $stateParams) {
    this.entry =  EntryFactory.get({id: $stateParams.id});
  }
}());
