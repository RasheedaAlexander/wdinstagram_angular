"use strict";

(function(){
  angular
  .module( "wdinstagrams" )
  .factory( "WdinstagramFactory", [
    "$resource",
    WdinstagramFunction
  ]);

  //Let's update our index controller so that, instead of using hard-coded wdinstagrams, this.wdinstagrams is set to the result of making a GET request to http://localhost:3000/wdinstagrams.
  function WdinstagramFunction($resource){
    return $resource("http://localhost:3000/wdinstadrams/:id");
  }
}());
