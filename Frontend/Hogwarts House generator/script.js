
const nameInput = document.querySelector("#nameInput");
const generateBtn = document.querySelector("#generateBtn");
const tryAgainBtn = document.querySelector("#tryAgainBtn");
const result = document.querySelector("#result");
const description = document.querySelector("#description");

const houses = ["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"
];

const houseDescriptions ={
  Gryffindor: "Brave, bold, and determined.",
  Hufflepuff: "Loyal, patient, and hardworking.",
  Ravenclaw: "Wise, creative, and curious.",
  Slytherin: "Ambitious, clever, and resourceful."
};

generateBtn.addEventListener ("click", assignHouse);
tryAgainBtn.addEventListener ("click", assignHouse);


function assignHouse(){
  const name =nameInput.value.trim();

  if (name === "") {
    result.textContent = "Please enter your name first!";
    description.textContent = "";
    return;
  }

  const randomIndex =Math.floor( Math.random() * houses.length);
  const house= houses[randomIndex];

  result.textContent=`${name} belongs in ${house}!`;

  description.textContent=houseDescriptions[house];

  tryAgainBtn.hidden= false;
}
