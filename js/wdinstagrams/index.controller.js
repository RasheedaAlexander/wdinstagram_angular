"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("wdinstagrams")
  .controller("WdinstagramIndexController", [
    "WdinstagramFactory",
    WdinstagramIndexControllerFunction
    ]);

  function WdinstagramIndexControllerFunction(WdinstagramFactory) {
// Whenever `.wdinstagrams` is called on our ViewModel, it returns the response from `.query()`
  this.wdinstagrams = WdinstagramFactory.query();
}
}());
