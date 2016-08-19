"use strict";

(function(){
  angular
    .module( "entries" )
    .controller( "EntryNewController", [
      "EntryFactory",
      EntryNewControllerFunction
    ]);

    function EntryNewControllerFunction( EntryFactory ){
      this.entry = new EntryFactory();
      this.create = function(){
        this.entry.$save()
      }
    }
}());
