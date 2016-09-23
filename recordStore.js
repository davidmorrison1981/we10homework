var RecordStore = function(city, inventory){
  this.city = city;
  this.inventory = new Array();


};

RecordStore.prototype = {
  addRecord: function(record1, record2, record3){
    return this.inventory.push(record1,record2,record3)
  }
};

module.exports = RecordStore;