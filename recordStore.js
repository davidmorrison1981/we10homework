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
    this.inventory.map(function(record){
      for (var key in record) {
            console.log(key + ": " + record[key]);
          }
      


    } 
    // var allRecordstring = allRecords.join()
    // console.log(allRecordstring)
  }

}

module.exports = RecordStore;



