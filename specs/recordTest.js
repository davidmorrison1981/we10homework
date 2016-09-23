var assert = require("assert");
var Record = require("../record.js");

describe("Record", function(){

  it("should have an artist", function(){
   discovery = new Record("Daft Punk", "Discovery", 9.99)
   assert.equal("Daft Punk", discovery.artist)
  })

  it("should have a title", function(){
   discovery = new Record("Daft Punk", "Discovery", 9.99)
   assert.equal("Discovery", discovery.title)
  })

  it("should have a price", function(){
   discovery = new Record("Daft Punk", "Discovery", 9.99)
   assert.equal(9.99, discovery.price)
  })
});