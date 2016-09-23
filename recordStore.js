var _ =  require("lodash");

var RecordStore = function(city, inventory){
  this.city = city;
  this.inventory = new Array();



};

RecordStore.prototype = {
  addRecord: function(record1, record2, record3){
    return this.inventory.push(record1,record2,record3)
  },

  listInventory: function(inv){
    var listInventorystring =""
      for(i=0; i<inv.length; i++){
        var temp = inv[i]
        listInventorystring += temp.join(),
      console.log(listInventorystring)
    }
          
    return listInventorystring
    }
  
}

module.exports = RecordStore;



