"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("wdinstagrams")
  .controller("WdinstagramShowController", [
    "WdinstagramFactory",
    "$stateParams",
    "WdinstagramShowControllerFunction"
  ])

  function WdinstagramShowControllerFunction(WdinstagramFactory) {
    this.wdinstagram =  WdinstagramFactory.get({id: $stateParams.id});
  }
}());
