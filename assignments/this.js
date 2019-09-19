/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window is the default unless you are strict mode which then will go to undefined
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict';

 function ghost(){
   console.log(this.boo);
 }
 ghost();
 const boo = '👻';


 // Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding