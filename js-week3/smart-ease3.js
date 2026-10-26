//NOnoN0nO — Note-taking app

const notes = [];

function saveNote(content, id){
  notes.push({content, id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note by ID
function getNote(id) {
  if (typeof id !== "number") {
    return "Error: Please provide a valid number for ID";
  }

  for (let i = 0; i <notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.log("Error: Note not found");
}

console.log(getNote(1));

// Log out all notes in a readable format

function logOutNotesFormatted() {
  for (let i = 0; i <notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
  }
}

logOutNotesFormatted();


//A unique feature — delete a note
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return;
    }
  }

  console.log ("Error: Note not found");
}

deleteNote(1);

console.log(notes);

//CactusIO — Smartphone usage app (optional)

let activities = [];

function addActivity(date, activity, duration) {

  activities.push({date, activity, duration});
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("23/7-18", "News", 28);

console.log(activities);

//Show usage status

function showStatus(activities) {
  if (!activities.length) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;

  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  const message =
    `You have added ${activities.length} activities. ` +
    `They amount to ${totalDuration} min. of usage`;

  console.log(message);
  return message;
}

const usageLimit = 120;
showStatus(activities);

//Set a usage limit

 activities = [];

function addActivity(date, activity, duration) {
  activities.push({date, activity, duration});
}

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;

  for (let i = 0; i <activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`);

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

 addActivity( "23/7-18", "Youtube",60);
 addActivity( "23/7-18", "Facebook", 40);
 addActivity( "23/7-18", "News", 30);

showStatus(activities);

//Extra feature — find the activity you spend the most time on

function mostUsedActivity(activities) {
  if (activities.length === 0) {
    console.log("No activities available");
    return;
  }

  const totals ={};

  for (let i = 0; i <activities.length; i++) {

    const activity= activities[i].activity;
    const duration= activities[i].duration;

    if (totals[activity] === undefined) {
      totals[activity]= 0;
    }

    totals[activity]+= duration;
  }

  let mostUsed = "";
  let longestDuration= 0;

  for (const activity in totals) {
    if (totals[activity] > longestDuration) {
      longestDuration = totals[activity];
      mostUsed = activity;
    }
  }

  console.log(`You spent the most time on ${mostUsed}: ${longestDuration} minutes`);
}

mostUsedActivity(activities);