var assert = require("assert");
var RecordStore = require("../recordStore.js");
var Record = require("../record.js");

describe("RecordStore", function(){

  it("should have a city", function(){
    edinburgh = new RecordStore("Edinburgh", [])
    assert.deepEqual([], edinburgh.inventory)
  })

  it("can add records to inventory", function(){
    edinburgh = new RecordStore("Edinburgh", [])
    edinburgh.addRecord(),
    assert.deepEqual(3, edinburgh.inventory.length)
  })

  



});

