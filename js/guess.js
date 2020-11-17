let answer = parseInt(Math.random() * 100);
let tryCount = 0;
let maxTryCount = 3;

function readInt(){
    let number = document.getElementById("userAnswer").value;
    return parseInt(number);
    // return +document.getElementById("userAnswer").value;
}

function write(text){
    document.getElementById("info").innerHTML = text;
}
// скрывает элементы
function hide(id){
    document.getElementById(id).style.display = "none";
}

function guess(){
    tryCount++;

    let userAnswer = readInt();
    if(userAnswer == answer){
        write("<b>Поздравляю, вы угадали!</b>");
        hide("button");
        hide("userAnswer");
        // 5 попыток
    } else if(tryCount >= maxTryCount){
        write("Вы проиграли<br>Правильный ответ: " + answer);
        hide("button");
        hide("userAnswer");
    } else if(userAnswer > answer){
        write("Вы ввели слишком большое число<br>Попробуйте еще раз. Введите число от 1 до 100");
    } else if(userAnswer < answer){
        write("Вы ввели слишком маленькое число<br>Попробуйте еще раз. Введите число от 1 до 100");				
    }
}

