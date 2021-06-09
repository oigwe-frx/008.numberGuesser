let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//This function will be called at the start of each new round in order to generate the new secret target number.This function should return a random integer between 0 and 9.
const generateTarget = () => {
  return Math.floor(Math.random()*9);
}

// Will be used as a helper function for compareGuesses(), to determine the distance between 2 numbers.
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1-num2);
}

//This function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (human, computer, target) => {
  let humanToTarget = getAbsoluteDistance(human, target);
  let compToTarget = getAbsoluteDistance(computer, target)

  if(humanToTarget === compToTarget) { return true;}
  else if(humanToTarget < compToTarget) { return true;}
  else {return false;}
}

// This function will be used to correctly increase the winner’s score after each round.
const updateScore = (winner) => { 
  switch (winner) {
    case 'human':
      humanScore += 1;
      break;
  
    case 'computer':
      computerScore += 1;
      break;
 
    default:
      return "Error - no winner";
      break;
  }
}

//This function will be used to update the round number after each round.
const advanceRound = () => {
  currentRoundNumber += 1;
}
