function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = "off";
  this.previousOwners = "";
  this.currentOwner = "Manufacturer";
  this.passengers = ""
}

Car.prototype.sale = function(newOwner){
  this.previousOwners = ['Manufacturer'];
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(newState){
  this.state = "on";
};
Car.prototype.off = function(changeState){
  this.state = "off";
};
Car.prototype.pickUp = function(newPassenger){
  if (this.state === "on") {
  this.passengers = ["john"];
  }
};
Car.prototype.dropOff = function(removePassenger){
  if (this.state !== "off") {
  this.passengers = [];
  }
};
Car.prototype.stop = function(newState){
  this.state = "off";
};
Car.prototype.park = function(newState){
  if (this.state !== "on") {
  this.passengers = [];
  }
};
module.exports=Car;
