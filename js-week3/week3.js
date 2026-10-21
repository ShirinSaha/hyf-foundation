//warm up-Item array removal
//Remove the item in names that is equal to nameToRemove


const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const index = names.indexOf("Ahmad");
if (index !== -1){
    names.splice(index, 1);
}

console.log (names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']




//When will we be there??


const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calcTravelTime(speed, distance) {
    const rawTravelTime = distance / speed; //8.64
    const hours= Math.floor(rawTravelTime); //8
    const totalMinutes = rawTravelTime * 60; //518.4
    const minutes= Math.round(totalMinutes % 60); //38

return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calcTravelTime(travelInformation.speed, travelInformation.destinationDistance);
console.log(travelTime); // 8 hours and 38 minutes




//Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];


function logOutSeriesText() {
  const minutesInDay= 24 * 60;
  const minutesInYear= 365 * minutesInDay;
  const lifespan= 80 * minutesInYear;

  let totalPercentage= 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series= seriesDurations[i];

    const totalMinutes =
      series.days * minutesInDay +
      series.hours * 60 +
      series.minutes;

    const percentage= (totalMinutes / lifespan) * 100;

     totalPercentage += percentage;

    console.log(`${series.title} took ${Number(percentage.toFixed(3))}% of my life`);
  }
  console.log(`In total that is ${Number(totalPercentage.toFixed(3))}% of my life`);
}

logOutSeriesText(); // logs out the text found above