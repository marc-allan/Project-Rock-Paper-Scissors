// um jogo PEDRA, PAPEL, TESOURA contra o COMPUTADOR

// HUMANO faz sua escolha

let HumanChoice = prompt("Choose one: Rock, Paper, Scissors");

function getHumanChoice() {
    return HumanChoice
}

// COMPUTADOR faz sua escolha

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber == 1) {
            ComputerChoice = "Rock";
        }
        else if (randomNumber == 2) {
            ComputerChoice = "Paper";
        }
        else if (randomNumber == 3) {
            ComputerChoice = "Scissors";
        };
    return ComputerChoice
}

// faz a COMPARAÇÃO
// PEDRA contra PEDRA empate 
// PEDRA contra TESOURA ganha 
// PEDRA contra PAPEL perde
// PAPEL contra PAPEL empate
// PAPEL contra PEDRA ganha
// PAPEL contra TESOURA perde
// TESOURA contra TESOURA empate
// TESOURA contra PAPEL ganha
// TESOURA contra PEDRA perde

function result(){
    if (ComputerChoice == "Rock" && HumanChoice == "Rock" ||
        ComputerChoice == "Paper" && HumanChoice == "Paper" ||
        ComputerChoice == "Scissors" && HumanChoice == "Scissors"
    ) {
        resultado = "It's a tie!"
    }
    else if (ComputerChoice == "Rock" && HumanChoice == "Scissors" ||
            ComputerChoice == "Paper" && HumanChoice == "Rock" ||
            ComputerChoice == "Scissors" && HumanChoice == "Paper"
    ) {
        resultado = "Computer Wins!"
    }
    else if (ComputerChoice == "Rock" && HumanChoice == "Paper" ||
            ComputerChoice == "Paper" && HumanChoice == "Scissors" ||
            ComputerChoice == "Scissors" && HumanChoice == "Rock"
    ) {
        resultado = "Human Wins!"
    }
    else {
        resultado = "Something's wrong, try again!"
    }
    return resultado
}

console.log("Computer: " + getComputerChoice())
console.log("Human: " + getHumanChoice())
console.log("Result: " + result())