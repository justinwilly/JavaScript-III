/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window is the default unless you are strict mode which then will go to undefined
* 2. Implicit: Goes directly into an object method for example the binding only works withing the object that it lives
* 3. New: creates new objects using the contructor function with the "new" keyword
* 4. Explicit: assinging "this" based only on the objects passed into a function for a specific use. Basically calling from in the function to an object to give it context on how to use "this"
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log('window binding example');
  console.log(this);


 // Principle 2
// code example for Implicit Binding
const justinWilly = {
  name: "justin",
  age: 27,
  rideBike: function(){
    console.log(`${this.name} rides his bike`)
  }
}
console.log(justinWilly.rideBike());

// Principle 3
// code example for New Binding

function me(name, thingIDo){
  this.person = name;
  this.thing = thingIDo;
  this.doesThis = function(){
    console.log(`My name is ${this.person} and I'm ${this.thing}`)
  };
}

const justin = new me('Justin', "learning how to code!");

console.log(justin.doesThis());

// Principle 4
// code example for Explicit Binding
const myself = {
  name: 'justin',
  age: 27
}
const activities = ['biking', 'golfing', 'surfing'];

function myHobbies(hobby1,hobby2,hobby3){
    console.log(`I'm ${this.name}, I am ${this.age}, and I love to go ${hobby1}, ${hobby2}, and ${hobby3}`)
}

console.log(myHobbies.call(myself, ...activities));