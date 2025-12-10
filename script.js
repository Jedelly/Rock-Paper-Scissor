
function getComputerChoice(){
    let val; 
   val = Math.floor(Math.random() * 3);
   if (val === 0){
    return "rock"
   }
    else if (val === 1){
    return "paper"
   }
   else{
    return "scissor"
   }
// this function randomly chooses between, rock, paper or scissior
};

function getHumanChoice(){
    let choice = prompt("What is your choice, valid choices are rock, paper or scissor ");
    return choice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
for (let i = 0; i<5;i++){
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let winner = playRound(humanChoice,computerChoice);
if (winner === "human"){
    humanScore ++;
}
else{
    computerScore++;
}
}

function playRound(humanChoice, computerChoice){
    let winner;
    let lowerChoice = humanChoice.toLowerCase();
    if (lowerChoice === "rock" && computerChoice === "scissor" ){
        return winner = "human"
    }
    if (lowerChoice === "rock" && computerChoice === "paper"){
        return winner = "computer"
    }
    if (lowerChoice === "rock" && computerChoice === "rock"){
    }
    if (lowerChoice === "scissor" && computerChoice === "paper"){
        return winner = "human"
    }
     if (lowerChoice === "scissor" && computerChoice === "rock"){
        return winner = "computer"
    }
     if (lowerChoice === "paper" && computerChoice === "scissor"){
        return winner = "computer"
    }
    if (lowerChoice === "paper" && computerChoice === "rock"){
        return winner = "human"
    }
    if (lowerChoice === "paper" && computerChoice === "paper"){
    }
}
if (humanScore > computerScore){
    return "Human wins!"
}
else if (computerScore > humanScore){
    return "Computer wins!"
}
else{
    return "It's a tie!!"
}
}

//console.log(getComputerChoice());
// console.log(getHumanChoice());
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));
// console.log(computerScore);
// console.log(humanScore);
console.log(playGame());