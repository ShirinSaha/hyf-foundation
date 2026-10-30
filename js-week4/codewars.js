//Vowel Count
 const vowels = ["a", "e", "i", "o", "u"] ;

function getCount(str) {
 let count = 0;
  for(let i = 0; i < str.length; i++ ){
    for(let j = 0; j < vowels.length; j++ ){
      if (str[i] === vowels[j] ) {
        count++; 
        continue; //means go out of the loop.
      }
    }
  }
  return count;
}


//Digit*Digit
function squareDigits(num){
  let numStr = String(num);
  let resultStr = "";
  
  for(let i = 0; i < numStr.length; i++) {
    let result = 0;
    let digit = Number(numStr[i]);
    result = digit * digit;
    resultStr += String(result);
  }
  return Number(resultStr);
}




//Highest and Lowest
function highAndLow(strNums){
    
    let highest = Number(strNums[0]);
    let lowest = Number(strNums[0]); 
    let temp ="";
  
  for(let i = 0; i < strNums.length; i++){
    if(strNums[i] !== " "){
      temp = temp + strNums[i]; 
    } else {
      temp=""; 
      continue;
    }
    
    
    if( Number(temp) > highest){
      highest = Number(temp);
    } else if ( Number(temp) < lowest){ 
      lowest = Number(temp);
    }
  }
  return String(highest) + " " + String(lowest);
}