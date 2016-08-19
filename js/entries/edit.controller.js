"use strict";

(function(){
  angular
  .module( "entries" )
  .controller( "EntryEditController", [
    "EntryFactory",
    "$stateParams",
    EntryEditControllerFunction
  ]);

  function EntryEditControllerFunction( EntryFactory, $stateParams ){
    this.entry = EntryFactory.get({id: $stateParams.id});
    this.update = function(){
      this.entry.$update({id: $stateParams.id})

    }

    this.destroy = function(){
      this.entry.$delete({id: $stateParams.id})
    }
  }
}());
