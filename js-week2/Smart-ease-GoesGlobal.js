//Smart-ease-GoesGlobal

//Flight booking fullname function

function getFullName ( firstName, surname ) {
  return firstName + " " + surname;
}

const fullName1 = getFullName("Benjamin", "Hughes");
const fullName2 = getFullName("Anna", "Smith");

console.log(fullName1);
console.log (fullName2);


//Formal fullname

function getFullName(firstName, surname, title = "") {
  if (!firstName || !surname) {
    return "Please provide both first name and surname";
  }

  const fullName = firstName + " " + surname;

  if (title) {
    return title + " " + fullName;
  }

  return fullName;
}

console.log(getFullName("Benjamin", "Hughes", "Lord"));
console.log(getFullName ("Jane", "Hughes", "Lady"));
console.log(getFullName("Alex", "Hughes"));


//Event application

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const today = new Date();
  const todayIndex = today.getDay();

  const eventIndex = (todayIndex + daysFromToday) % 7;

  return weekdays[eventIndex];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));
console.log(getEventWeekday(5));


//Weather wear

function getClothesToWear(temperature) {
  if (temperature < 0) {
    return "a winter coat, gloves, and a warm hat";
  } else if (temperature < 10) {
    return "a warm jacket and long trousers";
  } else if (temperature < 20) {
    return "long trousers and a sweater";
  } else if (temperature < 30) {
    return "shorts and a t-shirt";
  } else {
    return "light clothes and sandals";
  }
}

const clothesToWear = getClothesToWear(18);
console.log(clothesToWear); 


//Student manager

const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    console.log("Student is already in the class");
  } else if (class07Students.length >= 6) {
    console.log("Class is full");
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

//addStudentToClass
  

function addStudentToClass(studentName) {
  if (studentName.trim() === "") {
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (studentName === "Queen Margrethe" || studentName === "Queen") {
    class07Students.push(studentName);
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}


//getNumberOfStudents functionsvg


function addStudentToClass(studentName) {
  if (studentName.trim() === "") {
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (
    studentName === "Queen Margrethe" ||
    studentName === "Queen"
  ) {
    class07Students.push(studentName);
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Anna");
addStudentToClass("Benjamin");
addStudentToClass("Oliver");
addStudentToClass("Sofia");
addStudentToClass("Emma");
addStudentToClass("Noah");

addStudentToClass("Lucas");

addStudentToClass("Benjamin");

addStudentToClass("Queen Margrethe");

console.log(getNumberOfStudents()); 
console.log(class07Students);


//Candy 
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  const prices = {
    "sweet": 0.5,
    "chocolate": 0.7,
    "toffee": 1.1,
    "chewing-gum": 0.03
  };

  if (!(candyType in prices) || weight < 0) {
    console.log("Invalid candy type or weight");
    return;
  }

  boughtCandyPrices.push(prices[candyType] * weight);
}

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }

  return totalPrice < amountToSpend;
}

// Add some candy
addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 5);

console.log("Budget:", amountToSpend.toFixed(2));
console.log("Candy prices:", boughtCandyPrices);

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
