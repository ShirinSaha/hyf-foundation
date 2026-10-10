//Age-ify (A future age calculator)
const yearOfBirth = 1988;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`);


//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogAge = dogYearFuture - dogYearOfBirth
const dogHumanAge = (dogYearFuture - dogYearOfBirth) * 7;
console.log(dogAge);

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogHumanAge} human years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogAge} dog years old in ${dogYearFuture}`);
}

//Housey pricey (A house price estimator)


//PricePeter
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight  = 10;
const peterGardenSizeInM2 = 100;
const peterHouseCosts  = 2500000;

const peterHouseVolume = peterHouseWidth * peterHouseDepth * peterHouseHeight ;

const peterHousePrice = peterHouseVolume * 2.5 * 1000 + peterGardenSizeInM2 * 300;

if ( peterHouseCosts > peterHousePrice )
    {
    console.log ("Peter is paying too much");
} 
else if (peterHouseCosts < peterHousePrice) {
    console.log ("Peter is paying too little");
}


//PriceJulia

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSizeInM2 = 70;
const juliaHouseCosts = 1000000;

const juliaHouseVolume = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
const juliaHousePrice = juliaHouseVolume * 2.5 * 1000 + juliaGardenSizeInM2 * 300;

if ( juliaHouseCosts > juliaHousePrice ) {
    console.log("Julia is paying too much");   
} 
else if ( juliaHouseCosts < juliaHousePrice ) {
    console.log("Julia is paying too little");
}

//Ez Namey (Startup name generator) Optional
const firstWords = [
  "Easy",
  "Awesome",
  "Smart",
  "Super",
  "Happy",
  "Creative",
  "Digital",
  "Fast",
  "Global",
  "Bright"
]
const secondWords = [
  "Company",
  "Corporation",
  "Solutions",
  "Labs",
  "Systems",
  "Technologies",
  "Studios",
  "Ventures",
  "Group",
  "Works"
]

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];



console.log("The startup: " + startupName + " contains " + startupName.length + " characters");