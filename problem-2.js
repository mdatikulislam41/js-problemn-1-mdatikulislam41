/* JavaScript Basic Problem Solving 2 */
// Problem 1
//Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    const farenheit = ((celsius* 9)/5 ) +32;
    return farenheit;
}
  
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));


function isEven(num) {
    const result = (num % 2 === 0);
     return result;
  }
  
  console.log(isEven(4)); 
  console.log(isEven(7));

// Problem 3
//Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4)); 
console.log(sum(10, 20));

// Problem 4
//Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
    let result = Math.min(...arr);
    return result;
}
  
console.log(findSmallestNum([3, 5, 1, 9]));
console.log(findSmallestNum([-1, -5, 0, 10]));

// Problem 5
//Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let total = 0;
    for (let charecter of str) {
      if (vowels.includes(charecter)) {
          total++;
      }
    }
    return total;
  }
  console.log(countVowels("hello world")); 
  console.log(countVowels("Javascript"));

// Problem 6
//Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
    return arr[0];
  }
  
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
   
// Problem 7
//Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
    return arr.length === 0;
}
  
console.log(isArrayEmpty([])); 
console.log(isArrayEmpty([1, 2, 3]));

// Problem 8
//Write a function to return the factorial of a number. The function should take a single argument, which is the number.
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    let result = num * factorialize(num - 1);
    return result;
}
console.log(factorialize(5));
console.log(factorialize(7));

// Problem 9
//Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
    let cArray = str.split('');
    let reversed=  cArray.reverse();
    let join = reversed.join('');
    return join;
     
 }
 console.log(reverseString("hello"));
 console.log(reverseString("world"));

 // Problem 10
 //Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
 function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toLowerCase("HELLO WORLD"));
console.log(toLowerCase("JavaScript"));

// Problem 11
//Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello"));
  console.log(stringLength("world"));

// Problem 12
// Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));

// Problem 13
// Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    let lastValue = arr[ arr.length - 1 ];
    return lastValue;
}
console.log(getLastElement([1, 2, 3])); 
console.log(getLastElement(["a", "b", "c"]));

// Problem 14
//Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {  
  let arr= str.split('');
  return arr[0];
}
   
 console.log(getFirstCharacter("hello"));
 console.log(getFirstCharacter("world"));

 // Problem 15
 // Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

 function sumArray(arr) {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total;
  }
  console.log(sumArray([1, 2, 3, 4]));
  console.log(sumArray([-1, -2, -3, -4]));
  console.log(sumArray([1.5, 2.5, 3.5]));
 