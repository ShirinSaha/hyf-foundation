//Age-ify (A future age calculator)
const yearOfBirth = 1988;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);


//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
console.log(dogYear);

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${age} dog years old in ${dogYearFuture}`);
}

//Housey pricey (A house price estimator)


//PricePeter
const widthPeter = 8;
const depthPeter = 10;
const heightPeter = 10;
const gardenPeter = 100;
const pricePeter = 2500000;

const volumePeter = widthPeter * depthPeter * heightPeter;

const housePricePeter = volumePeter * 2.5 * 1000 + gardenPeter * 300;

if ( pricePeter > housePricePeter )
    {
    console.log ("Peter is paying too much");
} 
else if (pricePeter < housePricePeter) {
    console.log ("Peter is paying too little");
}


//PriceJulia

const widthJulia = 5;
const depthJulia = 11;
const heightJulia = 8;
const gardenJulia = 70;
const priceJulia = 1000000;

const volumeJulia = widthJulia * depthJulia * heightJulia;
const housepriceJulia = volumeJulia * 2.5 * 1000 + gardenJulia * 300;

if ( priceJulia > housepriceJulia ) {
    console.log("Julia is paying too much");   
} 
else if ( priceJulia < housepriceJulia ) {
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