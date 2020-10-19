'use strict';
let weeks = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];


function showDay (week) {

    let time = new Date().getDay()-1;

    let daysBlock = document.getElementById('daysOfWeek');
    document.getElementById('daysOfWeek').style.listStyleType = 'none';


    for (let i=0;i<week.length;i++){

        let days = document.createElement('li');

        days.innerText=week[i];
// добавление стилей
        if(i===time){
            if(i===5 || i===6){
                days.innerHTML=week[i].italics().bold(); 
            } else {
                days.innerHTML=week[i].bold();
                }
        } else if(i===5 || i===6){
            days.innerHTML=week[i].italics();
        }

        //вставляем в список дни недели
        daysBlock.appendChild(days);
    }
    
}
showDay(weeks);