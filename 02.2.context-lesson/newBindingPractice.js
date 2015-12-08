/*
  Create a function that you can create new superheroes with
  Each super hero should have:
    - a name,
    - a power,
    - a battle cry,
    - a function to shout the battle cry
    - a function to use the super power
*/

function Superhero(name, power, cry) {
  this.name = name;
  this.power = power;
  this.cry = cry;
  this.shout = function() {
    console.log(this.name + " shouts his battle cry " + this.cry);
  };
  this.usePower = function() {
    console.log(this.name + " uses the power " + this.power + ".");
  };
}

var bruceWayne = new Superhero("Batman", "batarang throw", "'FEAR ME!'");

bruceWayne.shout();
bruceWayne.usePower();

var bruceBanner = new Superhero("Hulk", "Hulk smash", "'HULK SMASH!!!'");

bruceBanner.shout();
bruceBanner.usePower();
