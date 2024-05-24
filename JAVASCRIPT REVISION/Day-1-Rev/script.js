// console.log("Hello World from script.js");

// Variable // ------------------------------------------------------------------------------------------------------------
var score=34;
var score=56; //Redeclae
console.log(score);

let points=23;  // can reassign
console.log(points); 

//Constant
 
const PI=3.14; // cannot reassign// Give value at the time of declaration
console.log(PI); 


// Data Types //------------------------------------------------------------------------------------------------------------
// 7 Data Types
// 1. Numbers (1,2,22,33.33,3.14,4,5,6,7,8)
// 2. String ("Hello","World")
// 3. Boolean (true,false)
// 4. null intentionally absence of value
let s = null;
console.log(s);
// 5. undefined, declared but not initialized
let p;
console.log(p);
// 6. Object Complex data structure
// 7. Symbol looks like object



// Strings  //---------------------------------------------------------------------------------------------------------------
console.log("Hello Coders");
let firstName="Ashu";
let lastName="Pandey";
// console.log(firstName,lastName);
// String Concatenation //---------------------------------------------------------------------------------------------------
// Method 1 using + operator
// let fullName=firstName + " " +lastName;

// Method 2 using template literals
let fullName=`${firstName} ${lastName}`;
console.log(fullName);

// Getting length of string //------------------------------------------------------------------------------------------------
console.log(firstName[0]);
console.log(firstName.length);
console.log(fullName.length);

// String Methods //------------------------------------------------------------------------------------------------------------

console.log(fullName.toUpperCase());
console.log(lastName.indexOf("d"));