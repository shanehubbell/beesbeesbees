var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  //color property inherited
  //food property inherited
  //eat method inherited
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = object.create(Bee.prototype);
HoneyMakerBee.constructor = Bee;

HoneyMakerBee.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.giveHoney = function () {
  this.honeyPot--;
}