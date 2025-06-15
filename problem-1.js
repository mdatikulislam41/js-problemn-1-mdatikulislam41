/* JavaScript Basic Problem Solving 1 */
//Problem 1
//Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

//Problem 2
//On one single line, declare three variables with the following names and values:

let firstName = "John";  
let lastName = "Doe"
let age = 35 ; 

//Problem 3
//Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x = 10;
let y = 5;
x *= y  
console.log(x);

//Problem 4
//Use comments to describe the correct data type of the following variables:

let length = 16; // Number 
let lastName = "Johnson"; // String

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // Object

//Problem 5
//Execute the function named myFunction.
function myFunction() {
    alert("Hello World!");
}
myFunction();

//Problem 6
//Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

let person = {
    name: "John",
    age: 50
}
alert(person.name + " is " + person.age);

//Problem 7
//The <button> element should do something when someone clicks on it. Try to fix it!

<button onclick="alert('clicked')">Click me.</button> 

/* Problem 8
Array Related Question
1. Alert the number of items in an array, using the correct Array property:
*/

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);
//2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"]; 
rand[0] = "Ford";

//problem 9
//Math Related Problems
//1. Use the correct Math method to create a random number.
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//2. Use the correct Math method to return the largest number of 10 and 20.
let result = Math.max(10,20);
console.log(result);
//3. Use the correct Math method to get the square root of 9.
let sqt = Math.sqrt(9);
console.log(sqt);

//problem 10
//comparison operator related problems
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
 
let x = 10;
let y = 5;

if(x >y){
    alert("x is greater than y")
}
//2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 16;
let message = (age < 18) ? "Too young" : "Old enough";
alert(message);
