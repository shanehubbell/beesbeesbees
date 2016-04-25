var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.job = keep on growing;
  //food inherited from grub.proto
  //eat interited from grub.proto
};

Bee.prototype = objec.create(Grub.prototype)
Bee.prototype.constructor = Grub;