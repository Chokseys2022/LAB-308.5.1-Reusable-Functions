
// ALAB 308.5.1:
// Creating Reusable Functions


// ******************************
// Part 1: Thinking Functionally
// ******************************
// Function sum of numbers:

function sumOfNums(a, b) {
	return a + b;
}
console.log("the sum of numbers is:", sumOfNums(5,10));


// ***********************************
// Function to get average of numbers:
// ***********************************

function numAvg(a, b) {
	return (a + b)/2;
}
console.log("The average number is:", numAvg(5,10));

// *******************************
// Function to get longest string:
// *******************************

function getLongStr(arr) {
  let longestString = "";
    
  for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longestString.length) {
     longestString = arr[i];
 }
 }
    return longestString;
}

let strArr = ["archie", "jughead", "veronica", "betty","reggie"];
let longestString = getLongStr(strArr);

console.log("The longest string is:", longestString);

// **************************************************
// Function returns strings longer than given number:
// **************************************************

function stringsLongerThan(array, number) {
    return array.filter(str => str.length > number);
  }
  
let result = stringsLongerThan(['enjoy', 'a', 'hot', 'cup', 'of', 'coffee', 'and','scone'], 3);
console.log("These are longer than the assigned number 3:")
console.log(result); 

// *********************************
// Function print recursive numbers
// *********************************

function printNumbersRecursive(n) {
    if (n > 0) {
printNumbersRecursive(n - 1);
console.log(n);
 }
 }
  
printNumbersRecursive(5);

// ******************************
// Part 2: Thinking Methodically
// ******************************
let person = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

let peopleAges = person.map(person => person.age);
console.log("The ages of persons in the group are:",peopleAges);


let removeAge= 58
let ages = [ 41, 25, 19, 58, 111 ]

ages = ages.filter(item => item !== removeAge)

console.log(ages);

// Changing occupation to job:

// let people = [
// { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
// { id: "48", name: "Barry", occupation: "Runner", age: 25 },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
// { id: "7", name: "Bilbo", occupation: "None", age: 111 }
//   ];

// people.forEach(person => {
//   person.job = person.occupation;
//   delete person.occupation;
//   person.age = (Number(person.age) + 1);
// });
// console.log(people);

// Sum and average of all ages:
// ****************************

let allAges = [ 42, 26, 20, 112 ]
let sumAges = allAges.reduce((a,b)=> a+b);
let avgAge = sumAges/allAges.length;         

console.log("The sum of all ages is:",sumAges);
console.log("The avg age is:", avgAge);

// ****************************
// Part 3: Thinking Critically
// ****************************

// Function to increment age, save it and display date:

function updateAge(personAge) {
  let personAgeCopy = JSON.parse(JSON.stringify(personAge));
  
  if ('age' in personAgeCopy) {
      personAgeCopy.age += 1;
  } else {
      personAgeCopy.age = 0;
     }
  return personAgeCopy.age;
  }
  
  let myZone = { timeZone: 'America/Los_Angeles' };
  let dateAgeUpdated = new Date().toLocaleString('en-US', myZone); 
  let originalAge = { age: 25, };
  let updatedAge = updateAge(originalAge);
  
  console.log("Incremented Age:", updatedAge);
  console.log("Original age:", originalAge);
  console.log("Date Stamp:", dateAgeUpdated, "PST");
  
  
  // **********************************************END OF CODE************************************************