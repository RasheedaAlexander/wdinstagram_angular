"use strict";

(function(){
  angular
  .module( "entries" )
  .factory( "EntryFactory", [
    "$resource",
    EntryFactoryFunction
  ]);

  //Let's update our index controller so that, instead of using hard-coded entries, this.entries is set to the result of making a GET request to http://localhost:3000/entries.
  function EntryFactoryFunction($resource){
    return $resource("http://localhost:3000/entries/");
  }
}());
