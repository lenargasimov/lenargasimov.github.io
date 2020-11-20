let score = 0;

function checkAnswer(inputId, answers){
    let userAnswer = document.getElementById(inputId).value;
    userAnswer = userAnswer.toLowerCase();
    for(let i = 0; i < answers.length; i++){
        if(userAnswer == answers[i]){
            score++;
            break;
        }
    }
}

function checkAnswers() {
/* TODO: hide answer */
    checkAnswer("userAnswer1", ["сон", "сноведение"]);
    checkAnswer("userAnswer2", ["морской", "укус акулы"]);
    checkAnswer("userAnswer3", ["шахматный", "троянский"]);

    alert("Вы отгадали " + score + " загадок");

}
