"use strict";

(function(){
  angular
  //call main app
  //declare a dependency on the ngResource module ($resource is a factory that lets you interact with RESTful backends easily)
  .module("entries")
  .controller("EntryIndexController", [
    "EntryFactory",
    EntryIndexControllerFunction
  ]);

  function EntryIndexControllerFunction(EntryFactory) {
    // Whenever `.entries` is called on our ViewModel, it returns the response from `.query()`
    var vm = this;
    this.entries = EntryFactory.query();


    vm.create = function(){
      vm.grumbles.$add(vm.newEntry).then(function(){
        vm.newEntry = {};
      });
    }

    vm.delete = function(entry){
      vm.entries.$remove(entry)
    }
  }
}());
