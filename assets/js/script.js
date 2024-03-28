document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }

    runGame("addition");
})

/**
 * The main game "loop", called when script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType){

    //Generates two random numbers from 1-25
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }
    else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

/**
 * Checks whether the user's answer matches the correct answer 
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert("You are correct my G");
    }
    else{
        alert("Allow it fam");
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets operands and operators from the DOM, returns correct anwer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }
 }

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}