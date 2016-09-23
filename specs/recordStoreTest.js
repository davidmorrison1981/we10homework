var assert = require("assert");
var RecordStore = require("../recordStore.js");
var Record = require("../record.js");

describe("RecordStore", function(){

  it("should have a city", function(){
    edinburgh = new RecordStore("Edinburgh", [])
    assert.deepEqual([], edinburgh.inventory)
  })

  beforeEach(function(){
    edinburgh = new RecordStore("Edinburgh", [])
    discovery = new Record("Daft Punk", "Discovery", 9.99),
    musique = new Record("Daft Punk", "Musique Vol.1", 9.99),
    humanAfterAll = new Record("Daft Punk", "Human After All", 9.99)    
  });

  it("can add records to inventory", function(){
    edinburgh.addRecord(discovery,musique,humanAfterAll),
    // console.log(edinburgh)
    assert.deepEqual(3, edinburgh.inventory.length)
  })

  it("can list record inventory", function(){
    edinburgh.addRecord(discovery,musique,humanAfterAll),
    edinburgh.listInventory(edinburgh.inventory),
    assert.deepEqual("Daft Punk, Discovery, 9.99, Daft Punk, Musique Vol.1, 9.99, Daft Punk, Human After All, 9.99", edinburgh.listInventory)
  })





});

