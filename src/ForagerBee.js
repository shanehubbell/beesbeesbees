var ForagerBee = function() {
  HoneyMakerBee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  //color inherited
  //food inherited
  //eat inherited
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = object.create(HoneyMakerBee.prototype);
ForagerBee.constructor = HoneyMakerBee;

ForagerBee.forage = function(treasure) {
  this.treasureChest.push(treasure);
};