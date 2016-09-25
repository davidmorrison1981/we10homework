var _ =  require("lodash");

var RecordStore = function(city, inventory, balance){
  this.city = city;
  this.inventory = new Array();
  this.balance = 5000



};

RecordStore.prototype = {
  addRecord: function(record1, record2, record3){
    return this.inventory.push(record1,record2,record3)
  },

  

    listInventory:  function(inventory){
      this.inventory.map(function(record){
        for (var record in inventory){
          console.log(record + ": " + inventory[record])
          return
        }
      })
    }

   sellRecord: function(record){

   } 
}

module.exports = RecordStore;



