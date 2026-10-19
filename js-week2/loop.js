
//l1 Counting

for (let i = 74; i <= 98; i++) {
  console.log(i);
}


for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 0 ; i <=20 ; i= i + 2) {
  console.log(i);
}

//send 7 emails

const recipients = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohamed@gmail.com";

// This function pretends to send an email
function sendEmailTo(recipient) {
  console.log("email sent to " + recipient);
}
//Use sendEmailTo to email every recipient.

//Bonus: log "Sent 7 emails" at the end. Bonus 2: skip anyone whose address doesn't include "@".



//L3 — Accumulate
function sumTo(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
sum = sum + i;
  }
  return sum;
}
console.log("sumTo4 "+ sumTo(4));

function makeLine(n) {
  let line = "";
  for ( let i = 0; i < n; i++ ) {
    line += "*";
  }

  return line ;
}

console.log(makeLine(5));

function countdown(n) {
   let result = "";
  for ( let i = n; i >= 1; i-- ) {
    result += i + " ";
  }

  return result;
}

console.log(countdown(3));