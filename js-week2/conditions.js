/*
//The if statement
const temperature = 15;

if (temperature > 25) {
  console.log("Go to the beach!");
}
else {
  console.log("This always runs");
}



//else — the other path
const age = 22;

if (age >= 18) {
  console.log("Allowed");
} else {
  console.log("Denied");
}


//else if — more than two paths
 age = 14;

if (age < 13) {
  console.log("You are a child"); //false
} else if (age < 20) {
  console.log("You are a teenager"); //true: the first true wins, the rest are skipped
} else {
  console.log("You are an adult"); 
}

*/
/*
//C1 — Can I vote?
 age = 5;
if (age >= 18){
    console.log("You can vote.");
} else { 
    const voteInYears = 18 - age;
    console.log(`You can vote in ${voteInYears} years.`);
}
//results:
// [17] You can vote in 1 years.
// [18] you can vote.
// [5] you can vote in 13 years.


//C2 — Even or odd?

const randomNumber = 7;
if (randomNumber % 2 === 0 ){
    console.log(`$(randomNumber) is even`);
} else { 
    console.log(`$(randomNumber) is odd`);
}
*/

/*
//C2 — Even or odd? 0 is special.
const randomNumber = 0;
if (randomNumber === 0){
  console.log("Zero is special");
} else if (randomNumber % 2 === 0) {
    console.log(`${randomNumber} is even`);
} else {
    console.log(`${randomNumber} is odd`);
}

*/
/*
//Fix the bug 
const score = 95;

if (score > 50 && score < 90) {
  console.log("You passed");
} else if (score > 90) {
  console.log("Excellent!");
} else {
  console.log("Try again");
}

*/

//Truthy & falsy
const firstName = "";

if (firstName) {
  console.log("Hello " + firstName);
} else {
  console.log("Please type your name");
}



//C3 — Bank balance
const balance = 0;
if (balance <= 0)
  {
    console.log ( "Please deposit some money!");
 }
  else if ( balance > 0 && balance <= 1000 )
    {
    console.log ("Your balance is looking okay");
 }
  else if ( balance > 1000 && balance <= 3000 )
    {
    console.log ("Your balance is looking good");

 } else if ( balance > 3000 && balance <= 10000 )
  {
    console.log ("Your balance is fantastic");

 }  else if ( balance > 10000 )
  {
    console.log ("Your balance is AMAZING!");
 }

 //Test 
 // -5: Please deposit some money!
 // 0: Please deposit some money!
 // 1000: Your balance is looking okay 
 // 1001: Your balance is looking good
 // 10000: Your balance is fantastic
 // 50000: Your balance is AMAZING!



 
 //C4 — Shrink it
const items = 3;
let label = items === 1 ? "item" : "items";

console.log("You have " + items + " " + label);


//C5 — Cinema ticket
const age = 10 ;
const isStudent = true;

const day = "Tuesday";
let price = 0;

if ( age < 12 ) {
 price= 0; 
} else if ( isStudent || age >= 65 ){ 
 price = 60; 
} else {
 price = 120;
} 

if (day === "Tuesday") {
  price = price / 2;
}

if (price === 0) {
  console.log( "free" );
}
else {
console.log( price + "kr" );
}


