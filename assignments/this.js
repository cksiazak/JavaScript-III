/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding - 'this' will be pointing toward the entire window rather than a specific object
* 2. Implicit binding - 'this' is before the dot when a function is called
* 3. New binding - 'this' refers to the object that is created and returned by the function
* 4. Explicit binding - 'this' is explicitly definted
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function windowBind(test) {
    console.log(this);
    return test;
}

// Principle 2
// code example for Implicit Binding
let me = {
    name: 'Chris',
    saysHello: function() {
        return `${this.name} says Hello!`;
    }
}
console.log(me.saysHello());

// Principle 3
// code example for New Binding
function speaker(person, words) {
    this.person = person;
    this.catchphrase = words;
    this.phrase = function() {
        return `${person} likes to say "${words}"`;
    };
}

const chris = new speaker("Chris", "I'm bored.");
console.log(chris.phrase());

// Principle 4
// code example for Explicit Binding