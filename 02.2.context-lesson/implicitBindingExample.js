/*
Younger= Age / 2.0 + 7.0
Older= (Age - 7.0) * 2
*/

name

var person = {
  name: "Single Steve",
  age: 27,
  datingMin: 0,
  datingMax: 0,
  calcRange: function(){
    /*
      Younger= Age / 2.0 + 7.0
      Older= (Age - 7.0) * 2
    */
  }
}

person.calcRange();

console.log(person.datingMin)
console.log(person.datingMax)

/* What happens if we pull the function out into a var */

/* Make a new function called pickup and add it to the person
The function should say "I'm " + name + ", How you doin' ?"*/


/* Invoke the function on the person and then not on the person.
