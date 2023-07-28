"use strict";

// JavaScript Fundamentals Part One

// --------------------------- Hello World
alert("Hello World!");

let js = "Amazing";
js = js.toLowerCase();

if (js === "amazing") {
   alert("JavaScript is FUN!");
}

console.log(40 + 8 + 23 - 10);

//  --------------------------- Values and Variables
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

// --------------------------- Data Types
// Number
let number = 23;
console.log(typeof 23);

// String
let myfirstName = "Jonas";
console.log(typeof "Jonas");

// Boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// Dymanic Typing - changing the data type of a value Or Reassignment
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// Null
// Symbol
// BigInt

// --------------------------- let, const and var
// let, const and var
let age = 30;
age = 31;

let birthYear = 1991;
birthYear = 1990;
// const job;

var myjob = "programmer";
myjob = "teacher";

// lastName = "Nwachukwu";
// console.log(lastName);

// --------------------------- Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const myFirstName = "Blaise";
const lastName = "Nwachukwu";
console.log(myFirstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// --------------------------- Operator Precedence
const currentYear = 2037;
const jonasAge = now - 1991;
const sarahAge = now - 2018;

console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(z, y);

const averageAge = (jonasAge + sarahAge) / 2;
console.log(jonasAge, sarahAge, averageAge);

////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 OR mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// --------------------------- Solution
let markMass = 95;
let markHeight = 1.88;
// let markMass = 78
// let markHeight = 1.69

let markBMI = markMass / markHeight ** 2;

// let johnkMass = 92
// let johnkHeight = 1.95
let johnkMass = 85;
let johnkHeight = 1.76;

let johnBMI = johnkMass / johnkHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(`Mark: ${markBMI}
John: ${johnBMI}
Does Mark have the higher BMI? ${markHigherBMI}
   `);

// --------------------------- Strings and Template Literals
const theFirstName = "Jonas";
const job = "teacher";
const theBirthYear = 1991;
const theYear = 2037;

const jonas =
   "I'm " +
   theFirstName +
   ", a " +
   (theYear - theBirthYear) +
   " year old " +
   job +
   "!";
console.log(jonas);

const jonasNew = `I'm ${theFirstName}, a ${
   theYear - theBirthYear
} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
   "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

// --------------------------- If else statement
const someAge = 12;
const isOldEnough = someAge >= 18;

if (isOldEnough) {
   console.log("Sarah can start driving license 🚗");
} else {
   const yearsLeft = 18 - someAge;
   console.log(`Sarah is too young. Wait another ${yearsLeft} years 😀`);
}

const someBirthYear = 1991;

let century;
if (someBirthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(`${century} century`);

////////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// --------------------------- Solution
let forMarkMass = 95;
let forMarkHeight = 1.88;
// let forMarkMass = 78
// let forMarkHeight = 1.69

let forMarkBMI = forMarkMass / forMarkHeight ** 2;

// let forJohnkMass = 92
// let forJohnkHeight = 1.95
let forJohnkMass = 85;
let forJohnkHeight = 1.76;

let forJohnBMI = forJohnkMass / forJohnkHeight ** 2;

if (forMarkBMI > forJohnBMI) {
   console.log(`Mark's BMI ${forMarkBMI} is higher than John's! ${forJohnBMI}`);
} else {
   console.log(`John's BMI ${forJohnBMI} is higher than Mark's! ${forMarkBMI}`);
}

// --------------------------- Type Conversion and Coercion
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

// --------------------------- Truthy and Falsy Values
// // There are 5 falsy values: 0, '', undefined, null, NaN They aer not exactly false as they are now but they become falsy when converted to a boolean. Everything else is truthy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
   console.log("Don't spend it all ;)");
} else {
   console.log("You should get a job!");
}

let height = 0;
if (height) {
   console.log("YAY! Height is defined");
} else {
   console.log("Height is UNDEFINED");
}

// --------------------------- Equality Operator == vs ===
const myAge = "18";
if (myAge === 18) console.log("You just became an adult :D (strict)");

if (myAge == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
   // 22 === 23 -> FALSE
   console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
   console.log("7 is also a cool number");
} else if (favourite === 9) {
   console.log("9 is also a cool number");
} else {
   console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

// --------------------------- Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
   console.log("Sarah is able to drive!");
} else {
   console.log("Someone else should drive...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
   console.log("Sarah is able to drive!");
} else {
   console.log("Someone else should drive...");
}

////////////////////////////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// --------------------------- Solution
const someScoreDolphins = (96 + 108 + 89) / 3;
const someScoreKoalas = (88 + 91 + 110) / 3;
console.log(someScoreDolphins, someScoreKoalas);

if (someScoreDolphins > someScoreKoalas) {
   console.log("Dolphins win the trophy 🏆");
} else if (someScoreKoalas > someScoreDolphins) {
   console.log("Koalas win the trophy 🏆");
} else if (someScoreDolphins === someScoreKoalas) {
   console.log("Both win the trophy!");
}

// BONUS 1
const theScoreDolphins = (97 + 112 + 80) / 3;
const theScoreKoalas = (109 + 95 + 50) / 3;
console.log(theScoreDolphins, theScoreKoalas);

if (theScoreDolphins > theScoreKoalas && theScoreDolphins >= 100) {
   console.log("Dolphins win the trophy 🏆");
} else if (theScoreKoalas > theScoreDolphins && theScoreKoalas >= 100) {
   console.log("Koalas win the trophy 🏆");
} else if (
   theScoreDolphins === theScoreKoalas &&
   theScoreDolphins >= 100 &&
   theScoreKoalas >= 100
) {
   console.log("Both win the trophy!");
} else {
   console.log("No one wins the trophy 😭");
}

// --------------------------- The switch Statement
const day = "friday";

switch (day) {
   case "monday": // day === 'monday'
      console.log("Plan course structure");
      console.log("Go to coding meetup");
      break;
   case "tuesday":
      console.log("Prepare theory videos");
      break;
   case "wednesday":
   case "thursday":
      console.log("Write code examples");
      break;
   case "friday":
      console.log("Record videos");
      break;
   case "saturday":
   case "sunday":
      console.log("Enjoy the weekend :D");
      break;
   default:
      console.log("Not a valid day!");
}

if (day === "monday") {
   console.log("Plan course structure");
   console.log("Go to coding meetup");
} else if (day === "tuesday") {
   console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
   console.log("Write code examples");
} else if (day === "friday") {
   console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
   console.log("Enjoy the weekend :D");
} else {
   console.log("Not a valid day!");
}

// --------------------------- The Conditional (Ternary) Operator
const theAge = 23;
// theAge >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = theAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (theAge >= 18) {
   drink2 = "wine 🍷";
} else {
   drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${theAge >= 18 ? "wine 🍷" : "water 💧"}`);

//////////////////////////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// --------------------------- solution
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

document.querySelector(".side")
document.getElementsByClassName("side")