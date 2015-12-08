/*
  Create an object that represents purchase.
  The purchase has itemsPurchased: 3, price: 3.99, total: 0

  Create a function (outside the object)
  That calculates the total from the item quantity using the this keyword

  Get a function created from using bind on the purchase object, and invoke it
  Console log the price is correct
*/

var purchase = {
  itemsPurchased: 3,
  price: 3.99,
  total: 0
};

function calc() {
  this.total = this.itemsPurchased * this.price;
}

var purchaseFunc = calc.bind(purchase); //do you have to assign it to another function?

purchaseFunc();

console.log(purchase.price + " should be 11.97 if my math is right.");
