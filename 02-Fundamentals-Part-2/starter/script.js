"use strict";

// JavaScript Fundamentals Part Two

// --------------------------- Using Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");

// const interface = "Audio":
// const private = 534;
// const if = 23;

// --------------------------- Functions
function logger() {
   console.log("My name is Blaise");
}

// Calling, Running or Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
   const juice = `Juice with ${apples} pieces of apples and ${oranges} pieces of oranges.`;
   return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Built in function converting number to string and vice versa
const num = Number("23");
console.log(num);

const str = String(32);
console.log(str);

// --------------------------- Function Declarations and Expressions
// Function Declaration
// Function declaration can be called befor defining the code . THIS DOESN'T WORK WITH FUNCTION EXPRESSION
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
   return 2037 - birthYear;
}

// Function Expression (function(birthYear) is called an anonymous function because it is a function without a name)
// Expressions produce values
const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// --------------------------- Arrow Functions
// Function Expression
const calcAgen2 = function (birthYear) {
   return 2037 - birthYear;
};

// Arrow Function {single line of code}
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Arrow Function {mor than one line of code}
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1996, "Blaise"));
console.log(yearsUntilRetirement(1980, "Bob"));

// --------------------------- Function Calling Other Functions
function cutFruitPieces(fruit) {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
   return juice;
}

console.log(fruitProcessor(2, 3));

// --------------------------- Reviewing Functions
// Function Expression
const calcAge = function (year) {
   return 2037 - year;
};

const yearsUntilRetirement1 = function (birthYear, firstName) {
   const age = calcAge(birthYear);
   const retirement = 65 - age;

   if (retirement > 0) {
      return retirement;
   } else {
      // return -1;
      return "Retired";
   }

   // return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement1(1991, "Blaise"));
console.log(yearsUntilRetirement1(1970, "Mike"));

////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// --------------------------- Solution
const calcAverage = (n1, n2, n3) => n1 + n2 + n3 / 3;
const pointsDolph = calcAverage(85, 54, 41);
const pointsKoala = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
   if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
   } else {
      console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
   }
};
checkWinner(pointsDolph, pointsKoala);

// --------------------------- Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "Teacher", friends];
console.log(jonas.length);

const year = new Array(1991, 1984, 2008, 2020);

// --------------------------- Array Excercise
const myCalcAge = function (birthYear) {
   return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
console.log(myCalcAge(years[0]));
console.log(myCalcAge(years[1]));
console.log(myCalcAge(years[years.length - 1]));
const ages = [
   myCalcAge(years[0]),
   myCalcAge(years[1]),
   myCalcAge(years[years.length - 1]),
];
console.log(ages);

// OR  to calculate all
years.forEach((item) => {
   const result = myCalcAge(item);
   console.log(result);
});

// --------------------------- Basic Array Methods
const myFriends = ["Michael", "Steven", "Peter"];
console.log(myFriends);

// Add Elements to end of array
myFriends.push("Jay");
console.log(myFriends);

// Add Elements to start of array
myFriends.unshift("May");
console.log(myFriends);

// Removes Elements at the end of array
myFriends.pop();
console.log(myFriends);

// Removes Elements at the start of array
myFriends.shift();
console.log(myFriends);

// Return index where the specified element is located
console.log(myFriends.indexOf("Steven"));
console.log(myFriends.indexOf("Bob"));

// Return true/false if the element is in the array or not
console.log(myFriends.includes("Steven"));
console.log(myFriends.includes("Bob"));

if (myFriends.includes("Peter")) {
   console.log("You have a friend called Peter");
}

////////////////////////////////////////////////////////////
// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// --------------------------- Solution
const calcTip = function (billValue) {
   if (billValue >= 50 && billValue <= 300) {
      return billValue * 0.15;
   } else {
      return billValue * 0.2;
   }
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
   calcTip(bills[0]),
   calcTip(bills[1]),
   calcTip(bills[bills.length - 1]),
];
console.log(tips);

const total = [
   bills[0] + tips[0],
   bills[1] + tips[1],
   bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total);

// --------------------------- Introduction to Objects (Optic Literal Syntax)
const jonasArray = [
   "Jonas",
   "Schmedtmann",
   2037 - 1991,
   "teacher",
   ["michael", "Peter", "Steven"],
];

const newJonas = {
   firstName: "Jonas",
   lastName: "Schmedtmann",
   age: 2037 - 1991,
   job: "Teacher",
   friends: ["michael", "Peter", "Steven"],
};
console.log(newJonas);

// --------------------------- Dot And Bracket Notation (Change and get Data)
const nweJonasArr = {
   firstName: "Jonas",
   lastName: "Schmedtmann",
   age: 2037 - 1991,
   job: "Teacher",
   friends: ["michael", "Peter", "Steven"],
};
console.log(nweJonasArr);

// Using Dot Notation
console.log(nweJonasArr.lastName);

// Using Bracket Notation
console.log(nweJonasArr["lastName"]);

const nameKey = "Name";
console.log(nweJonasArr["first" + nameKey]);
console.log(nweJonasArr["last" + nameKey]);

const interestedIn = prompt(
   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);
if (nweJonasArr[interestedIn]) {
   console.log(nweJonasArr[interestedIn]);
} else {
   console.log(
      "Wrong request! Choose between firstName, lastName, age, job and friends"
   );
}

nweJonasArr.location = "Portugal";
nweJonasArr["twitter"] = "@jonasschmedtman";
console.log(nweJonasArr);

// // --------------------------- Dot and Bracket Notation Excercise
// "Jonas has 3 friends and his bestfriend is called Michael"
const jonasArr = {
   firstName: "Jonas",
   lastName: "Schmedtmann",
   age: 2037 - 1991,
   job: "Teacher",
   friends: ["Michael", "Peter", "Steven"],
};
console.log(
   `${jonasArr.firstName} has ${jonasArr.friends.length} friends and his best friend is called ${jonasArr.friends[0]}.`
);

// --------------------------- Object Methods
const thisJonas = {
   firstName: "Jonas",
   lastName: "Schmedtmann",
   birthYear: 1991,
   job: "Teacher",
   friends: ["Michael", "Peter", "Steven"],
   hasDriversLicense: true,

   // calcAge: function (birthYear) {
   //    return 2037 - birthYear;
   // },

   // calcAge: function () {
   //    return 2037 - this.birthYear;
   // },

   calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
   },
};

console.log(thisJonas.calcAge());

console.log(thisJonas.age);

console.log(thisJonas.calcAge(thisJonas.birthYear));
console.log(thisJonas["calcAge"](thisJonas.birthYear));

// // --------------------------- Object Method Excercise
// "Jonas is a 46-year old teacher, and he has a drivers license"
const jonas2 = {
   firstName: "Jonas",
   lastName: "Schmedtmann",
   birthYear: 1991,
   job: "Teacher",
   friends: ["Michael", "Peter", "Steven"],
   hasDriversLicense: true,
   calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
   },
   theAnswer: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${
         this.job
      }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
   },
};
console.log(jonas2.theAnswer());
console.log(jonas2.calcAge());

////////////////////////////////////////////////////////////
// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// // --------------------------- Solution
const markMiller = {
   fullName: "Mark Miller",
   mass: 78,
   height: 1.69,
   calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
   },
};

const johnSmith = {
   fullName: "John Smith",
   mass: 92,
   height: 1.95,
   calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
   },
};

const higherBMI =
   johnSmith.calcBMI() > markMiller.calcBMI()
      ? `${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s (${markMiller.bmi})`
      : `${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi})`;
console.log(higherBMI);

// --------------------------- For Loop

for (let rep = 1; rep <= 10; rep++) {
   console.log(`Lifting weights repetion ${rep}`);
}

// --------------------------- Looping Arrays, Breaking and Continuing
const jonas3 = [
   "Jonas",
   "Schmedtmann",
   2037 - 1991,
   "teacher",
   ["Michael", "Peter", "Steven"],
   true,
   1738,
];

let types = [];

for (let i = 0; i < jonas3.length; i++) {
   // Reading from Jonas Array
   console.log(jonas3[i], typeof jonas3[i]);

   // Filling types array
   // types[i] = typeof jonas3[i]
   types.push(typeof jonas3[i]);
}
console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
   ages2.push(2037 - years2[i]);
}
console.log(ages2);

// Continue And Break Statements In Loops
// Continue - Exit the current iteration of the loop and move to the next one
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas3.length; i++) {
   if (typeof jonas3[i] !== "string") continue;

   console.log(jonas3[i], typeof jonas3[i]);
}

// Break - To competly terminate the whole loop
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas3.length; i++) {
   // After the number 46 is found, nothing else gets printed
   if (typeof jonas3[i] === "number") break;

   console.log(jonas3[i], typeof jonas3[i]);
}

// --------------------------- Looping Backwards and Loops in Loops
const jonasLoop = [
   "Jonas",
   "Schmedtmann",
   2037 - 1991,
   "teacher",
   ["Michael", "Peter", "Steven"],
   true,
   1738,
];

for (let i = jonasLoop.length - 1; i >= 0; i--) {
   // Goes from 6 to 0
   console.log(i, jonasLoop[i]);
}

// Loops within loops
for (let excercise = 1; excercise <= 3; excercise++) {
   console.log(`------- Starting excercise ${excercise}`);

   for (let rep = 1; rep <= 5; rep++) {
      console.log(`Excercise ${excercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
   }
}

// --------------------------- The While Loop
// For loop
for (let rep = 1; rep <= 10; rep++) {
   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// While Loop
let rep = 1;
while (rep <= 10) {
   console.log(`WHILE LOOP: Lifting weights repetition ${rep} 🏋️‍♀️`);
   rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
   console.log(`You rolled a ${dice}`);
   dice = Math.trunc(Math.random() * 6) + 1;
   if (dice === 6) console.log('Loop is about to end...')
}

////////////////////////////////////////////////////////////
// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
   4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// --------------------------- Solution
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];

const calcTip2 = function (billValue) {
   if (billValue >= 50 && billValue <= 300) {
      return billValue * 0.15;
   } else {
      return billValue * 0.2;
   }
};

for (let i = 0; i < bills2.length; i++) {
   tips2.push(calcTip2(bills2[i]));
   total2.push(bills2[i] + tips2[i]);
}
console.log(bills2)
console.log(tips2);
console.log(total2);

const calcAverage2 = function (arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum / arr.length;
};

console.log(calcAverage2(total2));
console.log(calcAverage2(tips2));

// Using your favourite loop method, loop through the array and ;
// 1) take out all red values in the array.

const arrColors = ["red", "blue", "green", "orange", "red", "grey", "red"];
const colorWithoutRed = [];

for (let i = 0; i < arrColors.length; i++) {
   if (arrColors[i] === "red") {
      continue;
   }
   console.log(arrColors[i]);
}
