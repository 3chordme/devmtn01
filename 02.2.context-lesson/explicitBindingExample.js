var car = {
  color: 'Red',
  make: 'Toyota',
  model: 'Truck',
  minSpeed: 0,
  maxSpeed: 120,
  currentSpeed: 0,
};

/* Go faster */

function goFaster() {
  this.currentSpeed += 10;
}

goFaster();
goFaster();
goFaster();

var boundFunction = goFaster.bind(car); //this will make 'this' = car, aka explicitly bind it to car. execution context is either implicit, explicit, default (aka in browser it is window), or new.

console.log('car is going', car.currentSpeed);

boundFunction(); //from now on, this = car;

console.log('car is going', car.currentSpeed);

/* Magically Transform Car */

var magicallyTransform = function (color, make, model) {
  this.color = color;
  this.make = make;
  this.model = model;
};

magicallyTransform.call(car, "Blue", "Ferrari", "458"); //this is explicitly bound, but only for this call.

console.log(car);

magicallyTransform.apply(car, ["Red", "Ford", "Taurus"]); //same as call, except parameters are all in a single array.

console.log(car);
