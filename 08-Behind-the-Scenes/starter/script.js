"use strict";

// -------------------------------- Scope
function calcAge(birthYear) {
   const age = 2037 - birthYear;
   // console.log(firstName);

   function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output);

      if (birthYear >= 1981 && birthYear <= 1996) {
         var millenial = true;
         // Creating NEW variable with same name as outer scope's variable
         const firstName = "Steven";

         // Reasssigning outer scope's variable
         output = "NEW OUTPUT!";

         const str = `Oh, and you're a millenial, ${firstName}`;
         console.log(str);

         function add(a, b) {
            return a + b;
         }
      }
      // console.log(str);
      console.log(millenial);
      // console.log(add(2, 3));
      console.log(output);
   }
   printAge();

   return age;
}

const firstName = "Jonas";
calcAge(1991);

// -------------------------------- Variable: Hoisting and TDZ (Temporal Dead Zone)
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
   return a + b;
}

const addExpr = function (a, b) {
   return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) {
   deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
   console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// -------------------------------- The this Keyword
console.log(this);

const calcAge1 = function (birthYear) {
   console.log(2037 - birthYear);
   console.log(this);
};
calcAge1(1991);

const calcAgeArrow = (birthYear) => {
   console.log(2037 - birthYear);
   console.log(this);
};
calcAgeArrow(1980);

const jonas = {
   year: 1991,
   calcAge: function () {
      console.log(this);
      console.log(2037 - this.year);
   },
};
jonas.calcAge();

const matilda = {
   year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();

// -------------------------------- The this Keyword
var firstName2 = "Matilda";

const jonas2 = {
   firstName: "Jonas",
   year: 1991,
   calcAge: function () {
      // console.log(this);
      console.log(2037 - this.year);

      // Solution 1
      // const self = this; // self or that
      // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };

      // Solution 2
      const isMillenial = () => {
         console.log(this);
         console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
   },

   greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`);
   },
};
jonas2.greet();
jonas2.calcAge();

// arguments keyword
// const addExpr2 = function (a, b) {
//    console.log(arguments);
//    return a + b;
// };
// addExpr2(2, 5);
// addExpr2(2, 5, 8, 12);

// var addArrow = (a, b) => {
//    console.log(arguments);
//    return a + b;
// };
// addArrow(2, 5, 8);

// -------------------------------- Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me2 = {
   name: "Jonas",
   age: 30,
};
const friend = me2;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me2);

// -------------------------------- Primitives vs. Objects in Practice
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
   firstName: "Jessica",
   lastName: "Williams",
   age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
   firstName: "Jessica",
   lastName: "Williams",
   age: 27,
   family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);
