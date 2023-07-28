"use strict";
////////////////////////////////////////////////////////////
// Assignment 1: Values and Variables
/* 
   1. Declare variables called 'country', 'continent' and 'population' and
   assign their values according to your own country (population in millions)
   2. Log their values to the console
*/
// --------------------------- Solution
const country = "Nigeria";
const continent = "Africa";
let population = 12000000; // Just an assumption
console.log(country, continent, population);

////////////////////////////////////////////////////////////
// Assignment 2: Data Types
/*
   1. Declare a variable called 'isIsland' and set its value according to your
   country. The variable should hold a Boolean value. Also declare a variable
   'language', but don't assign it any value yet
   2. Log the types of 'isIsland', 'population', 'country' and 'language'
   to the console
*/
// --------------------------- Solution
const isIsland = false;
let language;
console.log(isIsland, typeof isIsland);
console.log(population, typeof population);
console.log(country, typeof country);
console.log(language, typeof language);

////////////////////////////////////////////////////////////
// Assignment 3: let, const and var
/*
   1. Set the value of 'language' to the language spoken where you live (some
   countries have multiple languages, but just choose one)
   2. Think about which variables should be const variables (which values will never
   change, and which might change?). Then, change these variables to const.
   3. Try to change one of the changed variables now, and observe what happens
*/
// --------------------------- Solution
language = "igbo";

////////////////////////////////////////////////////////////
// Assignment 4: Basic Operators
/*
   1. If your country split in half, and each half would contain half the population,
   then how many people would live in each half?
   2. Increase the population of your country by 1 and log the result to the console
   3. Finland has a population of 6 million. Does your country have more people than
   Finland?
   4. The average population of a country is 33 million people. Does your country
   have less people than the average country?
   5. Based on the variables you created, create a new variable 'description'
   which contains a string with this format: 'Portugal is in Europe, and its 11 million
   people speak portuguese'
*/
// --------------------------- Solution
const halfACountrysPopulation = population / 2;
console.log(halfACountrysPopulation);

population += 1;
console.log(population);

let populationFinland = 6000000;
console.log(population > populationFinland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

const description =
   country +
   " is in " +
   continent +
   " and it's " +
   population +
   " people speak " +
   language +
   ".";
console.log(description);

////////////////////////////////////////////////////////////
// Assignment: Strings and Template Literals
/*
   1. Recreate the 'description' variable from the last assignment, this time
   using the template literal syntax
*/
// --------------------------- Solution
const description2 = `${country} is in ${continent} and it's ${population} people speak ${language}.`;
console.log(description2);

////////////////////////////////////////////////////////////
// Assignment: Taking Decisions: if / else Statements
/*
   1. If your country's population is greater that 33 million, log a string like this to the
   console: 'Portugal's population is above average'. Otherwise, log a string like
   'Portugal's population is 22 million below average' (the 22 is the average of 33
   minus the country's population)
   2. After checking the result, change the population temporarily to 13 and then to
   130. See the different results, and set the population back to original
*/
// --------------------------- Solution
if (population > averagePopulation) {
   console.log(`${country}'s population is above the average`);
} else {
   console.log(
      `${country}'s population is ${
         averagePopulation - population
      } below average.`
   );
}
