// um jogo PEDRA, PAPEL, TESOURA contra o COMPUTADOR

// PLAYERS SCORE

let humanScore = 0;
let computerScore = 0;

// COMPUTADOR faz sua escolha // OK

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber == 1) {
            computerChoice = "rock";
        }
        else if (randomNumber == 2) {
            computerChoice = "paper";
        }
        else if (randomNumber == 3) {
            computerChoice = "scissors";
        };
    return computerChoice
}

// HUMANO faz sua escolha // OK

function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper, scissors").toLowerCase();
    return humanChoice
}



// PLAY GAME


function playRound(humanChoice, computerChoice){

    if (computerChoice === humanChoice) {
        resultado = `It's a tie! Both chose ${humanChoice}`;
    }
    else if (computerChoice == "rock" && humanChoice == "scissors" ||
            computerChoice == "paper" && humanChoice == "rock" ||
            computerChoice == "scissors" && humanChoice == "paper"
    ) {
        resultado = (`Computer Wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (computerChoice == "rock" && humanChoice == "paper" ||
             computerChoice == "paper" && humanChoice == "scissors" ||
            computerChoice == "scissors" && humanChoice == "rock"
    ) {
    resultado = (`Human Wins! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
       }
    else {
        resultado = "Something's wrong, try again!"
    }

    return resultado
}



function playGame(){

    for (let i = 0; i < 5; i++){ 

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);


    console.log("Round " + (i + 1));
    console.log("Computer: " + computerSelection)
    console.log("Human: " + humanSelection)
    console.log("Result: " + resultado)
    console.log("Human has: " + humanScore + " points")
    console.log("Computer has: " + computerScore + " points")
    }
}

playGame();