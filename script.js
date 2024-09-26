const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const choices = ["Rock", "Paper", "Scissors"];



function printRock(){
    const playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "Rock"
}
function printPaper(){
    const playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "Paper"
}
function printScissors(){
    const playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "Scissors"
}



function Play(){
    const computerChoice = document.getElementById("computerChoice");
    var choice = choices[Math.floor(Math.random()*choices.length)];
    computerChoice.innerHTML = choice


    
    
}


