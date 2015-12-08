/*
  Create an object that represents a hotel
  The hotel has a basic room price
  The hotel has a function, calcPrice,
    that takes in:
    - the number of nights stay
    - the desired total gratuity for the whole stay
    the function returns
    - (basic room price * number of nights) + gratuity
*/

var hotel = {
  roomPrice: 3.50,
  calcPrice: function (nights, totalTip) {
    return (this.roomPrice * nights) + totalTip;
  }
};

var total = hotel.calcPrice(3, 30);

console.log("Total Hotel stay", total);
