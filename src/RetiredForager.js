var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  //food inherited
  //eat inherited
  //treasureCheast inherited
  //
};

RetiredForagerBee.prototype = object.create(ForagerBee.prototype);
RetiredForagerBee.constructor = ForagerBee;

RetiredForagerBee.forage = function() {
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.gamble = function() {
  this.treasureCheast.push('treasure');
};