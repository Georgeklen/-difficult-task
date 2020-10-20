'use strict';

const game = function() {

    const guessedNumber = Math.floor(Math.random()*100);
    let number = prompt("Угадайте число от 1 до 100");
    let attempts = 10;

    
    const theEnd = () => { alert("Игра окончена!"); };

    // проверка на число
    const isNum = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };



    const start = function f () {

        //проверки
        if(number === null){
            theEnd();
            return;
        } else if(!isNum(number)){
            number = prompt("Введи число!");
            start(attempts);
            return;
        } else{
            number = +number;
        }


        attempts--;
        if(attempts===0){
            if(confirm("Хотите сыграть еще?")) {
                game();
                return;
            } else{
            theEnd();
            return;
            }
        }
        
        
        // ввод
        if(number < guessedNumber || number > guessedNumber){

            let moreOrLess = number < guessedNumber ? "Загаданное число больше" :
            "Загаданное число меньше";

            number = prompt(moreOrLess+", осталось попыток "+attempts);
            start();
            
        } else {

            if(confirm("Вы угадали! Хотели бы сыграть еще?")){
                game();
            }else{
                theEnd();
            }
            
        }

    };




    return start();
};

game();