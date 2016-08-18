"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("entry")
  .controller("EntryIndexController", [
    "EntryFactory",
    EntryIndexControllerFunction
    ]);

  function EntryIndexControllerFunction(EntryFactory) {
// Whenever `.entries` is called on our ViewModel, it returns the response from `.query()`
  this.entries = EntryFactory.query();
}
}());
