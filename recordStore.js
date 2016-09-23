var _ =  require("lodash");

var RecordStore = function(city, inventory){
  this.city = city;
  this.inventory = new Array();



};

RecordStore.prototype = {
  addRecord: function(record1, record2, record3){
    return this.inventory.push(record1,record2,record3)
  },

  listInventory: function(inventory){
    var allRecords = this.inventory.map
    var allRecordstring = allRecords.join()
    console.log(allRecordstring)
 

  }

}

module.exports = RecordStore;



