 //F0

 
const rounded = Math.round(4.6);
console.log(rounded); // 5 Rounds to the nearest whole number

const floored = Math.floor(4.6);
console.log(floored); // 4 Rounds down

const minimum = Math.min(8, 3, 12);
console.log(minimum); // 3 The smallest number

const absolute = Math.abs(-7);
console.log(absolute); // 7 Returns the distance from zero (absolute value)

const lowerCase = "Hack Your Future".toLowerCase();
console.log(lowerCase); // "hack your future" 

const includesYour = "Hack Your Future".includes("Your");
console.log(includesYour); // true

const trimmed = "  spaces  ".trim();
console.log(trimmed); // "spaces"

 
 //F1
 function introduce(firstName, cityName) {
    console.log(`Hi, I'm ${firstName} from ${cityName}`);
 }
 introduce("Shirin", "Copenhagen");
 introduce("Sam", "Odense");

 function logSquare (number) {
    console.log(`${number} square is ${number*number}`);
 }

 logSquare(3);
 


 //Predict the output

function a() {
  return 5;
}
function b() {
  console.log(5);
}
function c(n) {
  return n + 1;
}
 
const x = a();
const y = b();
const z = c(c(1));

console.log(x, y, z);
console.log(a() + c(10));

//F2 — Return drills

function getAvarage(firstNumber, secondNumber, thirdNumber) {
    return numberToCheck %2 === 0;
}

function itemsList(itemList) {
    return itemList [itemList.length - 1];
}
console.log() 
function getDouble(number) {
    return number * 2;

}


//f3— Real formulas
function getCircleArea(radius) {
  return (Math.PI * (radius * radius));
} 

console.log("c2f " + celsiusToFahrenheit(20));
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5 + 32);
}

//F4 — Bank balance, as a function

function getBalanceMessage(balance) 
{
if (balance <= 0)
  {
    return ( "Please deposit some money!");
 }
  else if ( balance > 0 && balance <= 1000 )
    {
     return ("Your balance is looking okay");
 }
  else if ( balance > 1000 && balance <= 3000 )
    {
    return ("Your balance is looking good");

 } else if ( balance > 3000 && balance <= 10000 )
  {
    return ("Your balance is fantastic");

 }  else if ( balance > 10000 )
  {
    return ("Your balance is AMAZING!");
 }
}

console.log(getBalanceMessage(-20));
console.log(getBalanceMessage(1500));
console.log(getBalanceMessage(99999));


//F5 — Shop checkou
function getVat(price) {
    return price * .25;
}

function getPriceWithVat(price) {
 return price + getVat(price);
}

function getShippingCost(total) {
if (total >= 500 )
    return 0; 
  return 49;
}




//Same name, different variable
let name = "Global Gwen";

function sayName() {
  let name = "Local Lars"; 
  console.log(name);
}

sayName();         
console.log(name); 


function logString(stringToLog, numberOfTimesToLog) {

for (let i = 0; i < numberOfTimesToLog; i++) {
  console.log(stringToLog);
}
}
logString("hello", 3);
